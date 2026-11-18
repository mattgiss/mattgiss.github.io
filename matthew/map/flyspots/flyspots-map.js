// Shared MapLibre setup for the "Where Can I Fly?" launch sites map.
// Used by the standalone map page (/matthew/map/flyspots/) and by the
// story-layout case study (/matthew/work/flyspots-2026-10/).
// Requires maplibre-gl to be loaded first. Exposes window.FlyspotsMap.
(function () {
  var STATUS_COLOR = {
    "Allowed with conditions": "#2e9e4f",
    "Roadside right-of-way": "#f5a623",
    "Closed": "#d7301f"
  };
  var OVERVIEW = { center: [-104.868, 39.948], zoom: 11.6 };
  var SITES = [
    { id: "aylor", name: "Aylor Open Space, Thornton", center: [-104.9093, 39.9443], zoom: 16.4, color: "#2e9e4f" },
    { id: "quebec", name: "Quebec St pull-off", center: [-104.9012, 39.9588], zoom: 15.6, color: "#f5a623" },
    { id: "brighton", name: "Brighton Rd pull-off", center: [-104.8284, 39.9696], zoom: 16.8, color: "#f5a623" },
    { id: "riverdale", name: "Riverdale Regional Park", center: [-104.8763, 39.9273], zoom: 17.2, color: "#d7301f" }
  ];
  var KIND = { launch: "Launch zone", hazard: "Hazard", restricted: "Restricted area", parking: "Parking", route: "Access route" };
  var ESRI_ATTR = "Imagery © Esri, Maxar, Earthstar Geographics";
  var CLICKABLE = ["launch", "parking", "hazard", "route", "restricted-fill"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function popupHTML(p) {
    var kv = [];
    if (p.owner) kv.push("Land owner: " + esc(p.owner));
    if (p.surface) kv.push("Surface: " + esc(p.surface));
    if (p.ceiling_ft) kv.push("Ceiling: " + esc(p.ceiling_ft) + " ft AGL");
    if (p.height_ft) kv.push("Estimated height: " + esc(p.height_ft) + " ft");
    if (p.reason) kv.push("Reason: " + esc(p.reason));
    if (p.walk_min) kv.push("Walk: about " + esc(p.walk_min) + " min");
    if (p.fee) kv.push("Fee: " + esc(p.fee));
    if (p.site) kv.push("Site: " + esc(p.site));
    var h = '<span class="kv">' + esc(KIND[p.layer] || "") + "</span><br><b>" + esc(p.name) + "</b>";
    if (p.status) h += '<br><span class="st" style="background:' + (STATUS_COLOR[p.status] || "#8c8c8c") + '">' + esc(p.status) + "</span>";
    if (kv.length) h += '<div class="kv">' + kv.join("<br>") + "</div>";
    if (p.notes) h += '<div style="margin-top:6px">' + esc(p.notes) + "</div>";
    if (p.rules && /^https:\/\//.test(p.rules)) h += '<div style="margin-top:6px"><a href="' + esc(p.rules) + '" target="_blank" rel="noopener">Official rule ↗</a></div>';
    return h;
  }

  // opts: { dataUrl (required), center, zoom, cooperativeGestures, navigation (default true) }
  function create(container, opts) {
    opts = opts || {};
    var map = new maplibregl.Map({
      container: container,
      style: {
        version: 8,
        sources: {
          satellite: { type: "raster", tileSize: 256, maxzoom: 19, attribution: ESRI_ATTR,
            tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"] },
          topo: { type: "raster", tileSize: 256, maxzoom: 19, attribution: "Map © Esri",
            tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"] }
        },
        layers: [
          { id: "satellite", type: "raster", source: "satellite", layout: { visibility: "visible" } },
          { id: "topo", type: "raster", source: "topo", layout: { visibility: "none" } }
        ]
      },
      center: opts.center || OVERVIEW.center,
      zoom: opts.zoom == null ? OVERVIEW.zoom : opts.zoom,
      maxZoom: 20,
      cooperativeGestures: !!opts.cooperativeGestures,
      attributionControl: { compact: true }
    });
    if (opts.navigation !== false) map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "bottom-right");
    map.addControl(new maplibregl.ScaleControl({ unit: "imperial" }), "bottom-left");

    var is = function (layer) { return ["==", ["get", "layer"], layer]; };
    var statusColor = ["match", ["get", "status"],
      "Allowed with conditions", STATUS_COLOR["Allowed with conditions"],
      "Roadside right-of-way", STATUS_COLOR["Roadside right-of-way"],
      "Closed", STATUS_COLOR["Closed"], "#8c8c8c"];

    map.on("load", function () {
      map.addSource("fs", { type: "geojson", data: opts.dataUrl });
      map.addLayer({ id: "restricted-fill", type: "fill", source: "fs", filter: is("restricted"),
        paint: { "fill-color": "#ff5a5a", "fill-opacity": 0.12 } });
      map.addLayer({ id: "restricted-line", type: "line", source: "fs", filter: is("restricted"),
        paint: { "line-color": "#ff5a5a", "line-width": 2, "line-dasharray": [2, 1.5] } });
      map.addLayer({ id: "route", type: "line", source: "fs", filter: is("route"),
        layout: { "line-cap": "round", "line-join": "round" },
        paint: { "line-color": "#5fd38d", "line-width": ["interpolate", ["linear"], ["zoom"], 12, 2, 18, 5] } });
      map.addLayer({ id: "hazard-case", type: "line", source: "fs", filter: is("hazard"),
        layout: { "line-cap": "round", "line-join": "round" },
        paint: { "line-color": "#14181c", "line-width": ["interpolate", ["linear"], ["zoom"], 12, 5, 18, 9] } });
      map.addLayer({ id: "hazard", type: "line", source: "fs", filter: is("hazard"),
        layout: { "line-cap": "round", "line-join": "round" },
        paint: { "line-color": "#ffe600", "line-width": ["interpolate", ["linear"], ["zoom"], 12, 3, 18, 6] } });
      map.addLayer({ id: "parking", type: "circle", source: "fs", filter: is("parking"),
        paint: { "circle-radius": ["interpolate", ["linear"], ["zoom"], 11, 0, 13.5, 5, 18, 8],
                 "circle-color": "#4aa3ff", "circle-stroke-color": "#fff", "circle-stroke-width": 2 } });
      map.addLayer({ id: "launch", type: "circle", source: "fs", filter: is("launch"),
        paint: { "circle-radius": ["interpolate", ["linear"], ["zoom"], 10, 7, 18, 12],
                 "circle-color": statusColor, "circle-stroke-color": "#fff", "circle-stroke-width": 2.5 } });

      CLICKABLE.forEach(function (id) {
        map.on("mouseenter", id, function () { map.getCanvas().style.cursor = "pointer"; });
        map.on("mouseleave", id, function () { map.getCanvas().style.cursor = ""; });
      });
      map.on("click", function (e) {
        var hits = map.queryRenderedFeatures(
          [[e.point.x - 6, e.point.y - 6], [e.point.x + 6, e.point.y + 6]], { layers: CLICKABLE });
        if (!hits.length) return;
        // CLICKABLE is in priority order: points beat lines, lines beat the polygon fill.
        hits.sort(function (a, b) { return CLICKABLE.indexOf(a.layer.id) - CLICKABLE.indexOf(b.layer.id); });
        new maplibregl.Popup({ closeButton: true }).setLngLat(e.lngLat).setHTML(popupHTML(hits[0].properties)).addTo(map);
      });
    });
    return map;
  }

  function setBasemap(map, base) {
    map.setLayoutProperty("satellite", "visibility", base === "satellite" ? "visible" : "none");
    map.setLayoutProperty("topo", "visibility", base === "topo" ? "visible" : "none");
  }

  window.FlyspotsMap = { create: create, setBasemap: setBasemap, popupHTML: popupHTML,
    SITES: SITES, OVERVIEW: OVERVIEW, STATUS_COLOR: STATUS_COLOR, esc: esc };
})();
