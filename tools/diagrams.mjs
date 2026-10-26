// Line diagrams used by the generator (home page + project pages).
// Pure SVG with CSS-driven draw-on animation (see matthew/diagram.css, matthew/diagrams.js).
const f = (n) => Number(n.toFixed(1));

export function pipelineSVG(id = "bp") {
  // Stage 3: deterministic "dense cloud" of dots over a gentle hill
  let dots = "";
  let i = 0;
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 15; c++) {
      const t = -20 * Math.exp(-(((c - 7) ** 2) + ((r - 3) ** 2)) / 9);
      const x = 425 + c * 6.4 + r * 3.6;
      const y = 124 - r * 8 + t;
      dots += `<circle class="pt fade" style="--i:${i++}" cx="${f(x)}" cy="${f(y)}" r="1.5"/>`;
    }
  }
  // Stage 5: tiles that fill in
  const cells = [[0,0,.10],[1,0,.18],[3,0,.12],[0,1,.2],[2,1,.1],[3,1,.22],[1,2,.14],[2,2,.2],[0,3,.12],[3,3,.16]];
  const tiles = cells.map(([cx, cy, o], k) =>
    `<rect class="tile fade" style="--d:${(6 + k * 0.12).toFixed(2)}s;--o:${o}" x="${804 + cx * 30}" y="${40 + cy * 21}" width="30" height="21"/>`).join("");
  const lbl = (cx, n, t, s) =>
    `<text class="num" x="${cx}" y="168" text-anchor="middle">${n}</text><text class="lbl" x="${cx}" y="184" text-anchor="middle">${t}</text><text class="sub" x="${cx}" y="199" text-anchor="middle">${s}</text>`;
  return `<div class="bp" data-bp>
<svg viewBox="24 12 912 196" role="img" aria-labelledby="${id}-t ${id}-d" xmlns="http://www.w3.org/2000/svg">
<title id="${id}-t">Photogrammetry workflow</title>
<desc id="${id}-d">Five stages drawn as line diagrams: drone capture on a survey grid, matched tie points between overlapping images, a dense point cloud, surface models (DSM and DTM), and a finished orthomosaic.</desc>
<g class="stage">
<rect class="ln draw" pathLength="1" style="--d:0s" x="36" y="24" width="120" height="112"/>
<path id="${id}-path" class="ln acc draw" pathLength="1" style="--d:.3s;--t:1.8s" d="M48 40 H144 V62 H48 V84 H144 V106 H48"/>
<g class="drone fade" style="--d:2s"><circle r="3.5"/><path d="M-7 0H7M0 -7V7"/><animateMotion dur="7s" repeatCount="indefinite" begin="2s"><mpath href="#${id}-path"/></animateMotion></g>
${lbl(96, "01", "CAPTURE", "RTK · 80 / 70% overlap")}
</g>
<path class="ln flow fade" style="--d:1.8s" d="M166 80 H216"/><polyline class="ln fade" style="--d:1.8s" points="209,75 217,80 209,85"/>
<g class="stage">
<rect class="ln draw" pathLength="1" style="--d:2.2s" x="228" y="36" width="76" height="56"/>
<rect class="ln draw" pathLength="1" style="--d:2.4s" x="272" y="64" width="76" height="56"/>
<line class="ln acc draw" pathLength="1" style="--d:2.9s" x1="246" y1="50" x2="288" y2="80"/>
<line class="ln acc draw" pathLength="1" style="--d:3s" x1="272" y1="62" x2="314" y2="92"/>
<line class="ln acc draw" pathLength="1" style="--d:3.1s" x1="292" y1="76" x2="334" y2="106"/>
<line class="ln acc draw" pathLength="1" style="--d:3.2s" x1="262" y1="84" x2="304" y2="114"/>
<g class="pt fade" style="--d:2.8s"><circle cx="246" cy="50" r="2.4"/><circle cx="272" cy="62" r="2.4"/><circle cx="292" cy="76" r="2.4"/><circle cx="262" cy="84" r="2.4"/><circle cx="288" cy="80" r="2.4"/><circle cx="314" cy="92" r="2.4"/><circle cx="334" cy="106" r="2.4"/><circle cx="304" cy="114" r="2.4"/></g>
${lbl(288, "02", "TIE POINTS", "keypoint matching")}
</g>
<path class="ln flow fade" style="--d:3.4s" d="M358 80 H408"/><polyline class="ln fade" style="--d:3.4s" points="401,75 409,80 401,85"/>
<g class="stage">
${dots}
${lbl(480, "03", "DENSE CLOUD", "millions of 3D points")}
</g>
<path class="ln flow fade" style="--d:4.6s" d="M550 80 H600"/><polyline class="ln fade" style="--d:4.6s" points="593,75 601,80 593,85"/>
<g class="stage">
<path class="ln draw" pathLength="1" style="--d:4.8s" d="M612 122 H732"/>
<path class="ln draw" pathLength="1" style="--d:5s" d="M612 100 L624 98 L630 70 L636 98 L650 94 L657 62 L664 92 L682 90 L690 58 L698 90 L716 92 L732 88"/>
<path class="ln acc draw" pathLength="1" style="--d:5.6s" d="M612 106 C640 102 668 100 732 96"/>
<text class="sub" x="618" y="54">DSM</text><text class="sub acc-t" x="700" y="114">DTM</text>
${lbl(672, "04", "SURFACES", "DSM · DTM · contours")}
</g>
<path class="ln flow fade" style="--d:5.8s" d="M742 80 H792"/><polyline class="ln fade" style="--d:5.8s" points="785,75 793,80 785,85"/>
<g class="stage">
<rect class="ln draw" pathLength="1" style="--d:6s" x="804" y="40" width="120" height="84"/>
<path class="ln draw" pathLength="1" style="--d:6.2s" d="M834 40 V124 M864 40 V124 M894 40 V124 M804 61 H924 M804 82 H924 M804 103 H924"/>
${tiles}
<path class="ln acc draw" pathLength="1" style="--d:7s" d="M804 134 H844 M804 130 V138 M824 132 V136 M844 130 V138"/>
<text class="sub" x="850" y="138">40 ft</text>
${lbl(864, "05", "ORTHOMOSAIC", "georeferenced deliverable")}
</g>
</svg>
</div>`;
}

// A thin survey-line rule with a dot that travels along it.
export function ruleSVG(id = "bpr") {
  return `<div class="bp bp-rule" data-bp aria-hidden="true"><svg viewBox="0 0 960 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
<path id="${id}-p" class="ln draw" pathLength="1" style="--d:0s" d="M2 12 H958"/>
<path class="ln fade" style="--d:.8s" d="M2 5 V19 M240 8 V16 M480 8 V16 M720 8 V16 M958 5 V19"/>
<g class="drone fade" style="--d:1s"><circle r="3"/><animateMotion dur="9s" repeatCount="indefinite" begin="1s"><mpath href="#${id}-p"/></animateMotion></g>
</svg></div>`;
}
