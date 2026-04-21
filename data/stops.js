const STOPS_DATA = [
  // Route 1 - Village Green / Campground
  { id: 1001, name: "Village Green", lat: 44.3876, lng: -68.2039, routes: [1,2,3,4,7,8], facilities: ["restrooms","water","info"], trailheads: [], notes: "Main hub — Bar Harbor center" },
  { id: 1002, name: "Blackwoods Campground", lat: 44.3294, lng: -68.1855, routes: [1,3], facilities: ["restrooms","water","camping"], trailheads: ["Cadillac South Ridge","Gorham Mountain","Ocean Path"], notes: "Blackwoods campers' primary stop" },
  { id: 1003, name: "Seawall Campground", lat: 44.2301, lng: -68.3280, routes: [6], facilities: ["restrooms","water","camping"], trailheads: ["Ship Harbor","Wonderland","Bernard Mountain"], notes: "Southwest side campground" },
  { id: 1004, name: "Hulls Cove Visitor Center", lat: 44.4094, lng: -68.2480, routes: [2,4], facilities: ["restrooms","water","info","parking"], trailheads: [], notes: "Park entrance — buy passes here" },

  // Route 3 - Sand Beach
  { id: 1005, name: "Sand Beach", lat: 44.3297, lng: -68.1780, routes: [3,4], facilities: ["restrooms","water","lifeguard"], trailheads: ["Ocean Path","Great Head","Beehive"], notes: "Most popular beach — gets crowded fast" },
  { id: 1006, name: "Thunder Hole", lat: 44.3183, lng: -68.1830, routes: [3], facilities: [], trailheads: ["Ocean Path"], notes: "Best 2 hrs before high tide" },
  { id: 1007, name: "Otter Point", lat: 44.3061, lng: -68.1964, routes: [3], facilities: ["restrooms"], trailheads: ["Ocean Path","Otter Cliffs"], notes: "" },

  // Route 4 - Jordan Pond
  { id: 1008, name: "Jordan Pond House", lat: 44.3196, lng: -68.2528, routes: [4,5], facilities: ["restrooms","water","restaurant"], trailheads: ["Jordan Pond Path","South Bubble","North Bubble","Penobscot Mtn"], notes: "Get the popovers. Carriage road hub." },
  { id: 1009, name: "Eagle Lake", lat: 44.3747, lng: -68.2681, routes: [4], facilities: ["restrooms","water"], trailheads: ["Eagle Lake Carriage Road","Bicycle Express trailhead"], notes: "" },
  { id: 1010, name: "Cadillac Mountain (base)", lat: 44.3523, lng: -68.2237, routes: [4], facilities: [], trailheads: ["North Ridge Cadillac","Cadillac West Face"], notes: "Bus does NOT go to summit" },

  // Route 5 - Brown Mountain / Southwest Harbor
  { id: 1011, name: "Brown Mountain Gatehouse", lat: 44.3144, lng: -68.2759, routes: [5], facilities: [], trailheads: ["Carriage Roads — Brown Mtn area"], notes: "Good carriage road access" },
  { id: 1012, name: "Southwest Harbor", lat: 44.2742, lng: -68.3271, routes: [5,6], facilities: ["restrooms","water"], trailheads: [], notes: "Town center, Thurston's Lobster Pound nearby" },

  // Route 7 - Northeast Harbor
  { id: 1013, name: "Northeast Harbor", lat: 44.2957, lng: -68.2879, routes: [7], facilities: ["restrooms","water"], trailheads: ["Acadia Mtn","St. Sauveur"], notes: "" },
  { id: 1014, name: "Seal Harbor", lat: 44.2957, lng: -68.2193, routes: [7], facilities: [], trailheads: ["Hunters Beach"], notes: "" },

  // Route 9 - Schoodic
  { id: 1015, name: "Schoodic Woods Campground", lat: 44.3944, lng: -68.0567, routes: [9], facilities: ["restrooms","water","camping"], trailheads: ["Schoodic Head","Alder Trail"], notes: "Schoodic Peninsula — quieter side of the park" },
  { id: 1016, name: "Schoodic Point", lat: 44.3334, lng: -68.0601, routes: [9], facilities: ["restrooms"], trailheads: ["Schoodic Head"], notes: "Stunning wave-watching spot" },

  // Gateway Center
  { id: 1017, name: "Acadia Gateway Center", lat: 44.4567, lng: -68.3189, routes: [11], facilities: ["restrooms","water","parking","info"], trailheads: [], notes: "Park & ride — free parking, catch bus here" },

  // Additional stops
  { id: 1018, name: "Sieur de Monts", lat: 44.3644, lng: -68.2035, routes: [3,8], facilities: ["restrooms","water","info"], trailheads: ["The Beehive","Gorham Mtn","Dorr Mtn","Tarn Trail"], notes: "Wild Gardens of Acadia nearby" },
  { id: 1019, name: "Bar Harbor Airport", lat: 44.4499, lng: -68.3616, routes: [1], facilities: [], trailheads: [], notes: "" },
  { id: 1020, name: "Trenton (CAT Ferry Terminal)", lat: 44.4567, lng: -68.3189, routes: [11], facilities: ["restrooms"], trailheads: [], notes: "Ferry to Nova Scotia" },
];

const ROUTE_INFO = [
  { id: 1,  shortName: "Route 1", longName: "Village Green / Campground", color: "#5dba5d", description: "Connects Bar Harbor campgrounds to village center. Runs every 30 min." },
  { id: 2,  shortName: "Route 2", longName: "Bar Harbor / Hulls Cove", color: "#7ab3c8", description: "Bar Harbor to Hulls Cove Visitor Center. Every 30 min." },
  { id: 3,  shortName: "Route 3", longName: "Sand Beach / Blackwoods", color: "#d4841a", description: "Bar Harbor to Sand Beach, Thunder Hole, Otter Point, Blackwoods. Every 15–30 min." },
  { id: 4,  shortName: "Route 4", longName: "Jordan Pond / Eagle Lake", color: "#8a7ab5", description: "Jordan Pond House, Eagle Lake, carriage road access. Every 30 min." },
  { id: 5,  shortName: "Route 5", longName: "Brown Mtn / Southwest Harbor", color: "#c8a850", description: "Jordan Pond to Southwest Harbor via Brown Mountain Gatehouse." },
  { id: 6,  shortName: "Route 6", longName: "Southwest Harbor / Seawall", color: "#5a9ab5", description: "Southwest Harbor, Bass Harbor, Seawall Campground." },
  { id: 7,  shortName: "Route 7", longName: "Northeast Harbor / Seal Harbor", color: "#a05a3a", description: "Northeast Harbor, Seal Harbor, Acadia Mountain trailhead." },
  { id: 8,  shortName: "Route 8", longName: "Schooner Head", color: "#6aaa5a", description: "Bar Harbor to Schooner Head Overlook via Sieur de Monts." },
  { id: 9,  shortName: "Route 9", longName: "Schoodic", color: "#ba7a9a", description: "Winter Harbor ferry connection to Schoodic Peninsula." },
  { id: 10, shortName: "Bike X", longName: "Bicycle Express", color: "#e87a3a", description: "Bikes-only express between Bar Harbor and Eagle Lake." },
  { id: 11, shortName: "Gateway", longName: "Gateway Center", color: "#7ab050", description: "Trenton park & ride to Bar Harbor. Spring service starts May 20." },
  { id: 12, shortName: "Loop Rd", longName: "Loop Road", color: "#50a890", description: "Circles the iconic Park Loop Road. Spring service starts May 20." },
];
