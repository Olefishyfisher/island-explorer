const CACHE_NAME = 'island-explorer-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './data/stops.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Code+Pro:wght@400;600&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
];

// Map tiles cache (separate, larger)
const TILE_CACHE = 'island-explorer-tiles-v1';
const MAX_TILE_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter(k => k !== CACHE_NAME && k !== TILE_CACHE)
        .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Map tiles — cache with long TTL
  if (url.hostname.includes('tile.openstreetmap.org')) {
    event.respondWith(
      caches.open(TILE_CACHE).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            cache.put(event.request, response.clone());
            return response;
          }).catch(() => cached);
        })
      )
    );
    return;
  }

  // Live API calls — network first, no cache
  if (url.hostname.includes('availtec.com') || url.hostname.includes('corsproxy') || url.hostname.includes('allorigins')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response(JSON.stringify([]), { headers: { 'Content-Type': 'application/json' } })
      )
    );
    return;
  }

  // Weather API — network first
  if (url.hostname.includes('api.open-meteo.com') || url.hostname.includes('nominatim')) {
    event.respondWith(fetch(event.request).catch(() => new Response('{}', { headers: { 'Content-Type': 'application/json' } })));
    return;
  }

  // Static assets — cache first
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
