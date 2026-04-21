# 🌲 Island Explorer — Acadia Bus Tracker PWA

A progressive web app for tracking the [Island Explorer](https://www.exploreacadia.com/) fare-free shuttle buses in Acadia National Park, Mount Desert Island, Maine.

## Features

- **Live bus map** — real-time vehicle positions via the Availtec InfoPoint platform (same backend as the official tracker)
- **Route filter** — isolate any of the 10+ Island Explorer routes on the map
- **Nearby stops** — uses your GPS to find the closest stops and show upcoming departures
- **Trailhead lookup** — each stop shows which trails it serves
- **Weather** — live Bar Harbor forecast via Open-Meteo
- **Cruise ship advisory** — alerts during peak cruise season (July–Sept) when buses fill up faster
- **Parking estimates** — time-of-day lot status for Sand Beach, Jordan Pond, and other major trailheads
- **Service alerts** — live alerts from the Availtec feed
- **Last bus warning** — flags departures near end-of-day
- **Trip history** — log your rides locally (stored in browser)
- **Offline support** — service worker caches map tiles and app shell for dead-zones in the park
- **PWA** — add to iPhone home screen from Safari for a native-app experience

## Install on iPhone

1. Open this page in **Safari**
2. Tap the **Share** button (box with arrow)
3. Tap **"Add to Home Screen"**
4. Tap **Add**

The app will appear on your home screen with the Island Explorer icon and launch in full-screen mode.

## Deploy to GitHub Pages

1. Fork or clone this repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/` (or `/docs` if you move files there)
4. Your app will be live at `https://yourusername.github.io/island-explorer/`

**Update `manifest.json`** — change `"start_url"` to match your repo path:
```json
"start_url": "/your-repo-name/"
```

## Data Sources

| Data | Source | Notes |
|------|--------|-------|
| Live bus positions | `islandexplorertracker.availtec.com` | Avail Technologies InfoPoint — same backend as myStop® app |
| Routes & stops | Availtec REST API + hardcoded fallback | Static stop data compiled from exploreacadia.com |
| Weather | [Open-Meteo](https://open-meteo.com/) | Free, no API key needed |
| Map tiles | OpenStreetMap | Cached by service worker |
| Parking | Estimated | NPS doesn't publish a live parking API; estimates are time-of-day heuristics |
| Cruise ships | Advisory only | Links to barharborinfo.com for daily schedule |

## Service Dates (2026)

| Service | Dates |
|---------|-------|
| Gateway Center, Loop Road, Schoodic | May 20 – Oct 12 |
| All other routes | June 23 – Oct 12 |
| Fall schedule (reduced frequency) | Aug 17 – Oct 12 |

## File Structure

```
island-explorer/
├── index.html          # Main app
├── manifest.json       # PWA manifest
├── sw.js               # Service worker (offline caching)
├── data/
│   └── stops.js        # Stop locations, routes, trailheads
└── icons/
    ├── icon-192.png    # App icon
    └── icon-512.png    # App icon (large)
```

## Notes

- Live tracking only works during operating season (late June – mid October). In the off-season the app loads gracefully with schedule info and map.
- The Availtec API is public and unauthenticated — it's the same data served to the official myStop® app and the exploreacadia.com tracker. No ToS prohibits personal use.
- CORS proxies (`corsproxy.io` → `allorigins.win`) are used to access the API from a browser. If both are down, the app falls back to schedule-based departure estimates.

---

*Fare-free service operated by Downeast Transportation, Inc. for Friends of Acadia and Acadia National Park.*
