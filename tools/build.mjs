// Static page generator for the portfolio.
// Reads matthew/projects.js (single source of truth) and emits:
//   - matthew/work/<id>/index.html  (one indexable page per project)
//   - a <noscript> project list injected into matthew/index.html (crawlable fallback)
//   - sitemap.xml entries for every project + the map page
// Run after editing projects.js:  node tools/build.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PROJECTS, CATEGORIES } from "../matthew/projects.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://gissentanna.com";
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const slug = (id) => String(id).toLowerCase();
const VISIBLE = PROJECTS.filter((p) => (p.portfolio_worthy || "Yes").toLowerCase() === "yes");
const fmt = (n) => (typeof n === "number" && n >= 1000 ? n.toLocaleString() : (n ?? ""));
const loc = (p) => [p.site_address, p.county, p.state].filter(Boolean).join(", ");

function specsHTML(rows) {
  return `<div class="specs">${rows.map((r) => `<div class="spec"><span class="l">${esc(r.l)}</span><span class="v">${esc(r.v)}</span></div>`).join("")}</div>`;
}
function flightRows(f) {
  if (!f) return [];
  const a = [];
  if (f.aircraft) a.push({ l: "Aircraft", v: f.aircraft });
  if (f.sensor) a.push({ l: "Sensor", v: f.sensor });
  if (f.altitude_agl_ft) a.push({ l: "Altitude AGL", v: f.altitude_agl_ft + (typeof f.altitude_agl_ft === "number" ? " ft" : "") });
  if (f.forward_overlap_pct) a.push({ l: "Forward Overlap", v: f.forward_overlap_pct + "%" });
  if (f.side_overlap_pct) a.push({ l: "Side Overlap", v: f.side_overlap_pct + "%" });
  if (f.rtk_correction_source) a.push({ l: "RTK Source", v: f.rtk_correction_source });
  if (f.total_images) a.push({ l: "Images", v: fmt(f.total_images) });
  if (f.pct_calibrated) a.push({ l: "% Calibrated", v: f.pct_calibrated + "%" });
  return a;
}
function procRows(pr) {
  if (!pr) return [];
  const a = [];
  if (pr.software) a.push({ l: "Software", v: pr.software });
  if (pr.avg_gsd_ft_per_pixel) a.push({ l: "Avg GSD", v: pr.avg_gsd_ft_per_pixel + " ft/px" });
  if (pr.dense_point_count) a.push({ l: "Dense Points", v: fmt(pr.dense_point_count) });
  if (pr.median_2d_keypoint_matches) a.push({ l: "Median Keypoint Matches", v: fmt(pr.median_2d_keypoint_matches) });
  if (pr.geolocation_rms_z_ft) a.push({ l: "Geoloc RMS Z", v: pr.geolocation_rms_z_ft + " ft" });
  return a;
}
function parcelRows(ps) {
  if (!ps) return [];
  const a = [];
  if (ps.acres) a.push({ l: "Acres (GIS)", v: ps.acres });
  if (ps.perimeter_miles) a.push({ l: "Perimeter", v: ps.perimeter_miles + " mi" });
  if (ps.dtm_min_ft && ps.dtm_max_ft) a.push({ l: "Elevation Range", v: ps.dtm_min_ft + " – " + ps.dtm_max_ft + " ft" });
  if (ps.dtm_mean_ft) a.push({ l: "Mean Elevation", v: ps.dtm_mean_ft + " ft" });
  if (ps.slope_mean_deg) a.push({ l: "Mean Slope", v: ps.slope_mean_deg + "°" });
  return a;
}

function projectPage(p) {
  const s = slug(p.project_id);
  const url = `${BASE}/matthew/work/${s}/`;
  const hero = p.hero_shot || p.thumbnail || "";
  const heroAbs = hero ? `${BASE}/matthew/${hero}` : `${BASE}/matthew/images/headshot.jpg`;
  const title = `${p.project_name} | ${p.category} | Matthew Gissentanna`;
  const desc = (p.summary || p.overview || "").slice(0, 200);
  const metaParts = [loc(p), p.delivery_date && "Delivered " + p.delivery_date, p.owner_name && "Owner: " + p.owner_name, p.coverage_acres && p.coverage_acres + " ac coverage"].filter(Boolean);

  const sections = [];
  if (hero) sections.push(`<img class="hero-img" src="../../${esc(hero)}" alt="${esc(p.project_name)}, ${esc(loc(p) || p.category)}">`);
  if (p.overview) sections.push(`<section><h2>Overview</h2><p>${esc(p.overview)}</p></section>`);
  const fr = flightRows(p.flight); if (fr.length) sections.push(`<section><h2>Flight</h2>${specsHTML(fr)}</section>`);
  const prr = procRows(p.processing); if (prr.length) sections.push(`<section><h2>Processing</h2>${specsHTML(prr)}</section>`);
  if (p.crs) {
    const rows = [];
    if (p.crs.horizontal) rows.push(`<div class="row"><dt>Horizontal</dt><dd>${esc(p.crs.horizontal)}</dd></div>`);
    if (p.crs.vertical) rows.push(`<div class="row"><dt>Vertical</dt><dd>${esc(p.crs.vertical)}</dd></div>`);
    if (p.crs.image) rows.push(`<div class="row"><dt>Image</dt><dd>${esc(p.crs.image)}</dd></div>`);
    if (rows.length) sections.push(`<section><h2>Coordinate Reference Systems</h2><dl class="crs">${rows.join("")}</dl></section>`);
  }
  const par = parcelRows(p.parcel_stats); if (par.length) sections.push(`<section><h2>Parcel Statistics</h2>${specsHTML(par)}</section>`);
  if (p.methods?.length) sections.push(`<section><h2>Methods</h2><ul class="list">${p.methods.map((m) => `<li>${esc(m)}</li>`).join("")}</ul></section>`);
  if (p.deliverables?.length) sections.push(`<section><h2>Deliverables</h2><ul class="list">${p.deliverables.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></section>`);
  if (p.key_technical_challenge) sections.push(`<section><h2>Key Technical Challenge</h2><p>${esc(p.key_technical_challenge)}</p></section>`);
  if (p.lessons_learned) sections.push(`<section><h2>Lessons Learned</h2><p>${esc(p.lessons_learned)}</p></section>`);
  if (p.links?.length) {
    sections.push(`<section><h2>Reports &amp; Files</h2><div class="links">${p.links.map((l) => {
      const href = l.url.startsWith("http") ? l.url : "../../" + l.url;
      return `<a class="btn ${l.primary ? "" : "sec"}" href="${esc(href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`;
    }).join("")}</div></section>`);
  }

  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Portfolio", item: `${BASE}/matthew/` },
        { "@type": "ListItem", position: 2, name: "Work", item: `${BASE}/matthew/#work` },
        { "@type": "ListItem", position: 3, name: p.project_name, item: url } ] },
      { "@type": "CreativeWork", name: p.project_name, headline: p.project_name, description: desc,
        image: heroAbs, url, dateCreated: p.delivery_date || undefined,
        creator: { "@type": "Person", name: "Matthew Gissentanna", url: `${BASE}/matthew/` },
        keywords: (p.knowsAbout || ["drone mapping", "photogrammetry", "GIS", p.category]).join(", ") }
    ]
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KTJSH5SZ');</script>
  <!-- End Google Tag Manager -->
  <script>(function(){function n(){try{if(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)return true;var d=new Date(),h=d.getHours()+d.getMinutes()/60,doy=Math.floor((d-new Date(d.getFullYear(),0,0))/86400000),s=Math.sin(2*Math.PI*(doy-80)/365);return h>=18.25+2*s||h<6.25-2*s;}catch(e){return false;}}function a(){var e=document.documentElement;e.classList.add('theme-transition');e.setAttribute('data-theme',n()?'night':'day');clearTimeout(window.__tt);window.__tt=setTimeout(function(){e.classList.remove('theme-transition')},520);}a();setInterval(a,3e5);if(window.matchMedia){try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',a);}catch(e){}}})();</script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${url}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${esc(p.project_name)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${heroAbs}">
  <meta property="og:site_name" content="Liquid Sun Creative">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="${heroAbs}">
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alata&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../work.css">
</head>
<body>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTJSH5SZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<main class="wrap">
  <nav class="crumbs"><a href="/matthew/">Portfolio</a><span class="sep">/</span><a href="/matthew/#work">Work</a><span class="sep">/</span>${esc(p.project_name)}</nav>
  ${p.category ? `<span class="tag">${esc(p.category)}</span>` : ""}
  <h1>${esc(p.project_name)}</h1>
  <div class="pid">${esc(p.project_id)}${p.status ? " · " + esc(p.status) : ""}</div>
  ${metaParts.length ? `<div class="meta">${esc(metaParts.join(" · "))}</div>` : ""}
  ${sections.join("\n  ")}
  <a class="back" href="/matthew/">← Back to portfolio</a>
</main>
</body>
</html>
`;
}

// 1) Write per-project pages
let count = 0;
for (const p of VISIBLE) {
  const dir = path.join(ROOT, "matthew", "work", slug(p.project_id));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), projectPage(p));
  count++;
}
console.log(`wrote ${count} project pages`);

// 2) Inject crawlable <noscript> project list into matthew/index.html
const idxPath = path.join(ROOT, "matthew", "index.html");
let idx = fs.readFileSync(idxPath, "utf8");
const noscript = `<noscript>\n<ul class="lsc-project-fallback">\n${VISIBLE.map((p) =>
  `  <li><a href="work/${slug(p.project_id)}/">${esc(p.project_name)}</a>: ${esc(p.summary || "")}</li>`).join("\n")}\n</ul>\n</noscript>`;
const START = "<!-- PROJECTS-FALLBACK:START -->", END = "<!-- PROJECTS-FALLBACK:END -->";
const block = `${START}\n${noscript}\n${END}`;
if (idx.includes(START) && idx.includes(END)) {
  idx = idx.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block);
} else {
  idx = idx.replace('<div class="lsc-grid" id="lsc-grid"></div>', `<div class="lsc-grid" id="lsc-grid"></div>\n  ${block}`);
}
fs.writeFileSync(idxPath, idx);
console.log("injected noscript project fallback");

// 3) Regenerate sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: `${BASE}/matthew/`, freq: "monthly", pri: "1.0" },
  { loc: `${BASE}/matthew/map/`, freq: "monthly", pri: "0.8" },
  { loc: `${BASE}/matthew/blog/`, freq: "weekly", pri: "0.8" },
  { loc: `${BASE}/matthew/blog/rtk-photogrammetry-without-gcps/`, freq: "yearly", pri: "0.6" },
  ...VISIBLE.map((p) => ({ loc: `${BASE}/matthew/work/${slug(p.project_id)}/`, freq: "yearly", pri: "0.7",
    img: p.hero_shot ? `${BASE}/matthew/${p.hero_shot}` : null, imgTitle: p.project_name })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>${u.img ? `
    <image:image><image:loc>${u.img}</image:loc><image:title>${esc(u.imgTitle)}</image:title></image:image>` : ""}
  </url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap);
console.log(`wrote sitemap.xml with ${urls.length} urls`);
