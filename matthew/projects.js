// Single source of truth for portfolio projects.
// Imported by matthew/index.html (browser) and tools/build.mjs (page generator).

export const PROJECTS = [

    {
      // ---- CCR953-2025-11 — 953 Calvary Church Road Aerial Mapping ----
      // Populated from CCR953_inputs.yaml · Added 2026-05-17
      // Identity
      project_id: "CCR953-2025-11",
      project_name: "953 Calvary Church Road Aerial Mapping",
      category: "Personal",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "15 May 2026",
      site_address: "953 Calvary Church Road, Neeses, SC 29107",
      county: "Orangeburg County",
      state: "SC",
      owner_name: "Gissentanna, Larry O. Sr.",

      // Visuals — paste Squarespace file URLs after uploading the images
      hero_shot: "images/ccr953-hero.jpg",
      thumbnail: "images/ccr953-hero.jpg",

      // Narrative
      summary: "First end-to-end RTK photogrammetric deliverable for a 67.26-acre rural property in Orangeburg County, SC. Includes orthomosaic, DSM, DTM, classified point cloud, and 5-ft contours packaged into a 26-page Delivery Report.",
      overview: "End-to-end UAS photogrammetry mission over two parcels totaling 67.26 county-record acres. The Matrice 4E flew 270 images at 390 ft AGL with 80/70% forward/side overlap under diffuse overcast conditions using Point One Navigation network RTK Fixed, with no GCPs deployed. PIX4Dmatic v2.5.1 returned 100% camera calibration, 1.77M automatic tie points, and 33.9M dense points at 0.111 ft/px GSD. ArcGIS Pro post-processing produced a 0.5 ft/px DTM, 5-ft contours clipped to the parcel boundary, and parcel-aligned zonal statistics. This project serves as the baseline template for the Liquid Sun Creative 26-page Delivery Report format.",
      key_technical_challenge: "Ground classification under dense canopy required iterative refinement from 5 ft to 1 ft DEM resolution.",
      lessons_learned: "Photogrammetry has real line-of-sight limits under canopy. Iterative classification at progressively finer DEM resolution significantly improves ground/canopy separation. RTK Fixed without GCPs is reliable for property-scale mapping but precludes ASPRS class assignment.",

      flight: {
        aircraft: "DJI Matrice 4E",
        sensor: "DJI M4E integrated wide-angle camera, 4/3\" CMOS, 12.3 MP",
        altitude_agl_ft: 390,
        forward_overlap_pct: 80,
        side_overlap_pct: 70,
        rtk_correction_source: "Point One Navigation (network RTK)",
        total_images: 270,
        pct_calibrated: 100,
      },
      processing: {
        software: "PIX4Dmatic v2.5.1",
        avg_gsd_ft_per_pixel: 0.111,
        dense_point_count: 33942562,
        median_2d_keypoint_matches: 20915,
        camera_optimization_pct: 6.23,
        geolocation_rms_z_ft: 0.116,
      },
      crs: {
        horizontal: "NAD83(2011) / South Carolina (EPSG:6570)",
        vertical: "NAVD88 height in US Survey Feet GEOID18",
        image: "WGS84 + EGM96",
      },
      parcel_stats: {
        acres: 66.683,
        perimeter_miles: 1.816,
        dtm_min_ft: 244.28,
        dtm_max_ft: 282.22,
        dtm_mean_ft: 263.4,
        slope_mean_deg: 8.06,
        slope_max_deg: 73.74,
      },

      coverage_acres: 113.131,

      methods: [
        "390 ft AGL nadir grid at 80% forward / 70% side overlap",
        "RTK Fixed via Point One Navigation network RTK; no GCPs deployed",
        "PIX4Dmatic: calibration to dense cloud to iterative ground classification to DSM to orthomosaic",
        "ArcGIS Pro: DTM interpolation at 0.5 ft/px, 5-ft contour generation, parcel-clipped contours, zonal statistics",
        "Cartographic map exports: OrthoContour / DSM hillshade / DTM hillshade (3 PDF layouts)",
      ],
      deliverables: [
        "Orthomosaic (0.111 ft/px GeoTIFF (LZW))",
        "DSM (0.111 ft/px GeoTIFF (LZW))",
        "DTM (0.5 ft/px GeoTIFF)",
        "Classified Point Cloud (LAZ)",
        "5ft Contour Lines (ESRI Shapefile)",
        "PIX4Dmatic Quality + Custom Reports (PDF)",
      ],
      links: [
        { label: "Delivery Report (PDF)", url: "https://mattgiss.github.io/deliverables/CCR953_DeliveryReport.pdf", primary: true },
        { label: "Interactive Map", url: "map/" },
      ],
    },

    {
      // Identity
      project_id: "CRASH-2026-04",
      project_name: "Crash Scene Reconstruction",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "20 April 2026",
      site_address: "Staged scene",
      county: "",
      state: "NM",
      owner_name: "",

      // Visuals
      hero_shot: "images/crash-hero.jpg",
      thumbnail: "images/crash-hero.jpg",

      // Narrative
      summary: "Aerial scene capture of a staged two-vehicle collision, processed into a survey-grade orthomosaic and 3D model for measurable forensic documentation.",
      overview: "Captured a controlled crash scene and processed 69 nadir images in PIX4Dmatic. Output included a 0.033 ft/px orthomosaic, dense point cloud, and DSM in NAD 1983 State Plane New Mexico Central. The deliverable supports measurable scene reconstruction without contaminating evidence on the ground.",
      key_technical_challenge: "Capturing distortion-free imagery at low altitude to preserve evidence-grade GSD while still achieving 5+ image overlap across the full scene.",
      lessons_learned: "Lower-altitude oblique passes around the primary impact zone would have improved 3D fidelity on vehicle damage. Plan a second elevation tier on future forensic captures.",

      // Flight (mirrors schema.flight.*)
      flight: {
        aircraft: "DJI Phantom 4 Pro",
        sensor: 'FC6310, 1" CMOS',
        altitude_agl_ft: "low altitude",
        forward_overlap_pct: 80,
        side_overlap_pct: 70,
        rtk_correction_source: "",
        total_images: 69,
        pct_calibrated: 100
      },

      // Processing (mirrors schema.processing.*)
      processing: {
        software: "PIX4Dmatic v2.0.2",
        avg_gsd_ft_per_pixel: 0.033,
        dense_point_count: 5054372,
        median_2d_keypoint_matches: 2555,
        camera_optimization_pct: 0.31,
        geolocation_rms_z_ft: 1.146,
        workstation: "Win 11 / i9-10900KF / 32GB / RTX 3090"
      },

      // CRS (mirrors schema.crs.*)
      crs: {
        horizontal: "NAD83 CORS96 / NM Central FIPS 3002 (ESRI:103490)",
        vertical: "Project units in US Survey Feet",
        image: "WGS84 + EGM96"
      },

      // Parcel stats — null/omit for non-parcel projects
      parcel_stats: null,

      coverage_acres: 96.98,

      methods: [
        "Nadir grid mission at low altitude for evidence-grade GSD",
        "100% camera calibration (69 of 69 images aligned)",
        "Standard PIX4Dmatic pipeline with hardware-accelerated densification",
        "Output in NAD 1983 State Plane NM Central"
      ],

      deliverables: [
        "Orthomosaic (0.033 ft/px GeoTIFF)",
        "Dense Point Cloud (5.05M points)",
        "DSM",
        "Mesh model"
      ],

      links: []
    },

    {
      project_id: "ECSC-2023-XX",
      project_name: "ECSC Service Road Orthomosaic",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "May 2026",
      site_address: "Energy Capital Sports Complex service road",
      county: "",
      state: "",
      owner_name: "",

      hero_shot: "images/ecsc-hero.jpg",
      thumbnail: "images/ecsc-hero.jpg",

      summary: "Multi-temporal feature extraction across two captures of the same service road. 36 features identified in 2023 vs 32 in 2019, with detailed analysis of detection conditions.",
      overview: "Compared two orthomosaic captures of the Energy Capital Sports Complex service road to inventory drainage, lighting, and access infrastructure. Examined how lighting, vegetation growth, and surface contrast between captures shifted detection rates by feature type. The 2019 fresh-asphalt phase outperformed 2023 for manholes despite a narrower footprint.",
      key_technical_challenge: "Maturing roadside vegetation between captures partially occluded drains and pole bases by 2023, reducing detection in features that had been cleanly identifiable two years prior.",
      lessons_learned: "Pre-flight vegetation trimming and flying closer to solar noon under overcast conditions would meaningfully improve repeat-capture detection rates. Pushing forward/side overlap above 75/80% adds resilience where shadows and occlusion are unavoidable.",

      flight: null,
      processing: { software: "PIX4Dmatic + Pix4Dsurvey" },
      crs: null,
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Feature digitization in Pix4Dsurvey over Pix4Dmatic orthomosaics",
        "Categorical breakdown by feature type (drains, poles, manholes)",
        "Diagnosis of capture-day conditions affecting vectorization",
        "Recommended flight-planning adjustments for repeat capture"
      ],

      deliverables: [
        "Comparative feature inventory (2019 vs 2023)",
        "Methods report"
      ],

      links: [
        { label: "2019 Capture Report (PDF)", url: "reports/ECSC_2019_Report.pdf", primary: true },
        { label: "2023 Capture Report (PDF)", url: "reports/ECSC_2023_Report.pdf" }
      ]
    },

    {
      project_id: "TIOGA-2026-05",
      project_name: "Tioga Community Hall Subproject Alignment",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "01 May 2026",
      site_address: "Tioga Community Hall, ND",
      county: "",
      state: "ND",
      owner_name: "",

      hero_shot: "images/tioga-hero.jpg",
      thumbnail: "images/tioga-hero.jpg",

      summary: "Comparison of manual and automatic subproject alignment in PIX4Dmatic, with guidance on when each method holds up against accuracy-defensible deliverables.",
      overview: "A short methods report on registering separate camera blocks in PIX4Dmatic. Manual alignment with shared tie points (MTPs, GCPs, checkpoints) is still the right call for arbitrary coordinate systems, indoor reconstructions, low-overlap captures, and any deliverable that has to defend a specific accuracy claim. Automatic alignment via Adjust Input Cameras is faster and more consistent operator-to-operator when RTK or PPK geolocation is strong.",
      key_technical_challenge: "Articulating a defensible decision rule for when automatic alignment is and is not appropriate, given that automatic alignment can hide bundle-adjustment failures that manual tie points would surface.",
      lessons_learned: "",

      flight: null,
      processing: { software: "PIX4Dmatic" },
      crs: null,
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Comparison of shared-tie-point alignment vs Adjust Input Cameras",
        "Decision criteria for each method by project context",
        "References to Pix4D documentation on minimum tie-point counts"
      ],

      deliverables: [
        "Methods report"
      ],

      links: []
    },

    {
      project_id: "AVAL-2025-11",
      project_name: "Crested Butte Avalanche Zone Mapping",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "09 November 2025",
      site_address: "Crested Butte, CO",
      county: "",
      state: "CO",
      owner_name: "",

      hero_shot: "images/aval-hero.jpg",
      thumbnail: "images/aval-hero.jpg",

      summary: "Slope-aspect avalanche hazard mapping for Crested Butte, separating spring and fall risk zones across northeast- and southeast-facing slopes.",
      overview: "Spatial analysis identifying seasonal avalanche zones in the Crested Butte backcountry. Northeast-facing slopes accumulate wind-loaded snow through fall and become unstable first; southeast-facing slopes destabilize later during spring melt. Hazard layers overlaid on a hillshade base for route-planning context.",

      flight: null,
      processing: { software: "ArcGIS Pro" },
      crs: {
        horizontal: "WGS 1984 UTM Zone 13N",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Slope and aspect raster derivation from USGS DEM",
        "Reclassification into spring vs fall avalanche zones by aspect category",
        "Overlay on hillshade base for cartographic context"
      ],

      deliverables: [
        "Hazard map (PDF)"
      ],

      links: [
        { label: "Map (PDF)", url: "reports/AVAL_Report.pdf", primary: true }
      ]
    },

    {
      project_id: "TONGASS-2025-11",
      project_name: "Tongass Timber Stand Valuation",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "03 November 2025",
      site_address: "Tongass National Forest, AK",
      county: "",
      state: "AK",
      owner_name: "",

      hero_shot: "images/tongass-hero.jpg",
      thumbnail: "images/tongass-hero.jpg",

      summary: "Valuation map of timber stands offered for sale in Tongass National Forest: 2,187 acres across four value tiers, $109.83M total.",
      overview: "Cartographic deliverable inventorying timber stands offered for sale and classifying each by per-square-foot valuation tier. Output supports prospective bidder evaluation by visualizing stand boundaries, value class, and acreage in a single sheet.",

      flight: null,
      processing: { software: "ArcGIS Pro" },
      crs: null,
      parcel_stats: null,
      coverage_acres: 2187,

      methods: [
        "Timber stand polygons digitized from agency source data",
        "Per-square-foot value classified into 4 tiers (Jenks natural breaks)",
        "Per-stand acreage labeled directly on the map for transparency"
      ],

      deliverables: [
        "Valuation map (PDF)"
      ],

      links: [
        { label: "Map (PDF)", url: "reports/TONGASS_Report.pdf", primary: true }
      ]
    },

    {
      project_id: "POWAY-2025-11",
      project_name: "Poway Fire Station Siting Analysis",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "08 November 2025",
      site_address: "City of Poway, CA",
      county: "San Diego County",
      state: "CA",
      owner_name: "",

      hero_shot: "images/poway-hero.jpg",
      thumbnail: "images/poway-hero.jpg",

      summary: "Multi-criteria suitability analysis identifying candidate parcels for a new fire station in Poway. Funnels 113 → 79 → 35 → 29 parcels as criteria tighten.",
      overview: "Suitability model identifying buildable parcels for a new fire station within Poway city limits. Eight site criteria (slope, road access, ownership, zoning, etc.) progressively narrow the candidate set. The funnel exposes the trade-offs between strict criteria and viable site count.",

      flight: null,
      processing: { software: "ArcGIS Pro" },
      crs: {
        horizontal: "NAD 1983 StatePlane California VI FIPS 0406 Feet",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Slope raster derivation, reclassified at <4% / <7% / <10% thresholds",
        "Parcel attribute filtering by ownership type and zoning",
        "Stacked criteria intersection: 8 layers applied incrementally"
      ],

      deliverables: [
        "Suitability map with criteria funnel (PDF)"
      ],

      links: [
        { label: "Map (PDF)", url: "reports/POWAY_Report.pdf", primary: true }
      ]
    },

    {
      project_id: "FBA-2025-12",
      project_name: "Birthplaces of Foundational Black American Innovators",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "December 2025",
      site_address: "Eastern United States",
      county: "",
      state: "",
      owner_name: "",

      hero_shot: "images/fba-hero.jpg",
      thumbnail: "images/fba-hero.jpg",

      summary: "Thematic map of the birthplaces of Foundational Black American Innovators (1755–1902), classified by contribution type: health and science, computing and telecom, infrastructure, and everyday innovation.",
      overview: "Final project for GIS 4504 Cartography. Identifies and maps the birthplaces of individuals whose innovations shaped American science, infrastructure, and daily life between 1755 and 1902. Each location is symbolized by contribution category to surface geographic patterns in foundational Black American innovation.",

      flight: null,
      processing: { software: "ArcGIS Pro" },
      crs: null,
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Source data compiled from biographical and historical records",
        "Contribution categorized into 4 thematic classes",
        "Cartographic design: poster-format layout, contribution-coded markers, ocean masking for legibility"
      ],

      deliverables: [
        "Poster-format thematic map (PDF)"
      ],

      links: [
        { label: "Map (PDF)", url: "reports/FBA_Report.pdf", primary: true }
      ]
    },

    {
      project_id: "GRBA-2026-02",
      project_name: "Great Basin National Park Reference Map",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "February 2026",
      site_address: "Great Basin National Park, NV",
      county: "",
      state: "NV",
      owner_name: "",

      hero_shot: "images/greatbasin-hero.jpg",
      thumbnail: "images/greatbasin-hero.jpg",

      summary: "NPS-brochure-style reference map of Great Basin National Park, with hypsometric relief, trails, and visitor facilities styled after the National Park Service map standard.",
      overview: "A cartographic design exercise reproducing the visual language of official National Park Service brochure maps: hypsometric tinting and hillshade for terrain, a restrained NPS palette, and a full symbology set for trails, campgrounds, visitor centers, and points of interest across the park and the surrounding Snake and Spring Valley context. Peaks, ranges, and the Highland Ridge Wilderness boundary are labeled to NPS typographic conventions.",
      key_technical_challenge: "Matching the NPS house style (typography hierarchy, terrain shading, and feature symbology) while keeping a dense set of recreation features legible.",

      flight: null,
      processing: { software: "ArcGIS Pro" },
      crs: null,
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Hypsometric tinting and hillshade for terrain depiction",
        "NPS-style symbology for trails, facilities, and points of interest",
        "Typographic hierarchy and labeling after the NPS brochure standard",
        "Layout composition with legend, scale, and locator context"
      ],
      deliverables: [
        "Reference park map (PDF)"
      ],
      links: [
        { label: "Map (PDF)", url: "reports/GRBA_Report.pdf", primary: true }
      ]
    },

    {
      project_id: "DCCR-2026-01",
      project_name: "Washington D.C. Burglary Mapping",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "25 January 2026",
      site_address: "Washington, D.C.",
      county: "",
      state: "DC",
      owner_name: "",

      hero_shot: "images/dccrime-hero.jpg",
      thumbnail: "images/dccrime-hero.jpg",

      summary: "Choropleth of 2019 residential burglaries by Metropolitan Police district, overlaid with station, substation, and community-liaison locations.",
      overview: "A crime-mapping exercise classing 2019 burglary counts across the seven MPD police districts of Washington, D.C. with a sequential color scheme, layered over a point symbology that distinguishes stations, substations, and specialized liaison units (commanding officers labeled). Drawn in NAD 1983 State Plane Maryland on a Lambert Conformal Conic projection.",
      key_technical_challenge: "Balancing a district choropleth against dense point symbology and labels without overwhelming the reader.",

      flight: null,
      processing: { software: "ArcGIS Pro" },
      crs: {
        horizontal: "NAD83 StatePlane Maryland FIPS 1900 (Lambert Conformal Conic)",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Classed choropleth of burglary counts by police district",
        "Layered point symbology: stations, substations, liaison units",
        "Figure-ground separation against a muted basemap",
        "Layout with legend, scale bar, and source attribution"
      ],
      deliverables: [
        "Crime choropleth map (PDF)"
      ],
      links: [
        { label: "Map (PDF)", url: "reports/DCCRIME_Report.pdf", primary: true }
      ]
    },

    {
      project_id: "DNVR-2026-02",
      project_name: "Denver Block-Group Demographic Atlas",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "08 February 2026",
      site_address: "Denver, CO",
      county: "",
      state: "CO",
      owner_name: "",

      hero_shot: "images/denver-hero.jpg",
      thumbnail: "images/denver-hero.jpg",

      summary: "A block-group choropleth atlas of Denver covering population density, age, ethnicity, gender, and housing, all sharing one classification and layout system across the series.",
      overview: "A demographic atlas mapping U.S. Census variables across Denver block groups in NAD 1983 State Plane Colorado Central (feet). Each sheet uses a shared classification approach, legend structure, and layout so the maps read as a coherent series, with parks and interstates included for orientation.",
      key_technical_challenge: "Designing one classification and layout template that stays legible and comparable across five different demographic variables.",

      flight: null,
      processing: { software: "ArcGIS Pro" },
      crs: {
        horizontal: "NAD83 StatePlane Colorado Central FIPS 0502 (Feet)",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Census block-group joins for five demographic variables",
        "Consistent class breaks and legend design across the series",
        "Shared layout template for a coherent atlas",
        "Orientation context: parks, interstates, place labels"
      ],
      deliverables: [
        "Population density map (PDF)",
        "Age map (PDF)",
        "Ethnicity map (PDF)",
        "Gender map (PDF)",
        "Housing map (PDF)"
      ],
      links: [
        { label: "Population Density (PDF)", url: "reports/DENVER_PopDensity_Report.pdf", primary: true },
        { label: "Age (PDF)", url: "reports/DENVER_Age_Report.pdf" },
        { label: "Ethnicity (PDF)", url: "reports/DENVER_Ethnicity_Report.pdf" },
        { label: "Gender (PDF)", url: "reports/DENVER_Gender_Report.pdf" },
        { label: "Housing (PDF)", url: "reports/DENVER_Housing_Report.pdf" }
      ]
    },

    {
      project_id: "USTEMP-2026-02",
      project_name: "Lower 48 Temperature Isotherms (1991–2020)",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "22 February 2026",
      site_address: "Contiguous United States",
      county: "",
      state: "",
      owner_name: "",

      hero_shot: "images/ustemp-hero.jpg",
      thumbnail: "images/ustemp-hero.jpg",

      summary: "Three-panel isarithmic map of 1991–2020 U.S. temperature normals (30-year mean, January, and July) at a 5°C isotherm interval.",
      overview: "An isarithmic mapping exercise interpolating NOAA 1991–2020 climate normals into smooth temperature surfaces for the contiguous United States, presented as three coordinated panels (annual mean, January, July) at a 5°C isotherm interval in NAD 1983 Contiguous USA Albers. A diverging color scheme is keyed to temperature bands.",
      key_technical_challenge: "Producing clean, continuous isotherms from station-based normals while keeping the three panels visually consistent.",

      flight: null,
      processing: { software: "ArcGIS Pro" },
      crs: {
        horizontal: "NAD83 Contiguous USA Albers",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Interpolation of NOAA 1991–2020 station normals to a temperature surface",
        "Isotherm (isarithmic) contouring at 5°C intervals",
        "Diverging, banded color scheme keyed to temperature",
        "Three-panel coordinated layout (mean / January / July)"
      ],
      deliverables: [
        "Three-panel isotherm map (PDF)"
      ],
      links: [
        { label: "Map (PDF)", url: "reports/USTEMP_Report.pdf", primary: true }
      ]
    },

    {
      // ---- FLYSPOTS-2026-10 | Where Can I Fly? Drone Launch Sites in Adams County ----
      // Coursework: GIS 4690 (GPS for GIS) final project, University of Denver.
      // Started October 2026 as the Field Maps lab; delivered as the course final on 15 Nov 2026.
      // Uses the optional case-study fields: question, findings, figures.
      // style: "storymap" renders the project page with the StoryMap-style stylesheet.
      style: "storymap",
      project_id: "FLYSPOTS-2026-10",
      project_name: "Where Can I Fly? Drone Launch Sites in Adams County",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "15 November 2026",
      site_address: "Brighton and Thornton, CO",
      county: "Adams County",
      state: "CO",
      owner_name: "",

      hero_shot: "images/flyspots-hero.jpg",
      thumbnail: "images/flyspots-hero.jpg",

      summary: "Final project for GPS for GIS at the University of Denver: 24 GPS-collected features that answer where a drone pilot can legally take off in north metro Adams County, delivered as a StoryMap and web map.",
      question: "Where can a drone pilot legally take off in north metro Adams County, and what hazards and limits apply at each site?",
      overview: "This was the final project for GIS 4690, GPS for GIS, in the University of Denver GIS and UAS certificate. As a Part 107 pilot I answer this question before every flight at a new site, and the answer has always been scattered across an airspace app, satellite imagery and a site visit. I designed a five-layer field database in ArcGIS Pro, scouted candidate sites with a QuickCapture project, then collected launch zones, hazards, restricted areas, parking and access routes in ArcGIS Field Maps. Each launch zone records its land owner, legal status, a link to the official rule and notes for the next pilot. The work is delivered as an ArcGIS StoryMap with an embedded web map.",
      findings: [
        "Legal launch sites are scarce. Of six launch zones surveyed, two are allowed with conditions, two are roadside right-of-way, one is closed and one is not permitted.",
        "The land owner decides takeoff and landing, separately from the airspace. All four November sites sit outside the FAA UAS Facility Map grid, yet only one is a site I would send another pilot to today: Aylor Open Space in Thornton.",
        "Adams County allows drone takeoff and landing on its park land only at one designated drop-in area, which was closed for construction when I surveyed it.",
        "Brighton and Commerce City park rules do not mention drones. I treated silence as no permission and marked no site in those cities as allowed."
      ],
      key_technical_challenge: "Turning a legal question into a data model. Airspace, land ownership and local rules each come from a different source, so the launch zone layer needed fields that hold the answer and its evidence together: legal status, land owner and a link to the rule itself.",
      lessons_learned: "Scout in daylight: my first look at one site was at night and I mistook a rise in the ground for a fence. Load an imagery basemap before leaving home, because lines are hard to place against a street map. Check layer settings before the field day, since photo attachments were disabled on my layers and that cost time at the first site. Phone GNSS at about 8 ft is enough to show which side of a road a launch zone is on, and it is not enough to locate a property line.",

      flight: null,
      processing: { software: "ArcGIS Pro, ArcGIS Field Maps, ArcGIS QuickCapture, ArcGIS Online, ArcGIS StoryMaps" },
      crs: {
        horizontal: "WGS 84 (collection); Web Mercator (web map)",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Scouting: 26 photo-documented points logged in a QuickCapture project (14 opportunities, 9 hazards, 3 airport or heliport rule checks) to pick the sites worth a full survey",
        "Mission planning: satellite geometry for the collection window documented with Trimble GNSS Planning Online predictions (PDOP 0.75 to 0.93, more than 30 satellites in view)",
        "Data model: five feature classes built in ArcGIS Pro covering points, lines and polygons, published as hosted feature layers",
        "Collection: ArcGIS Field Maps on phone GNSS across two sessions (October 25 and November 15, 2026), with photo attachments and an airspace check at every site",
        "Attribution: site name, land owner, legal status, official rule link and pilot notes recorded for each launch zone",
        "Quality control: completeness, duplicate, position-over-imagery and logic checks, which caught and corrected an attribute shift between two sites after a row deletion",
        "Delivery: StoryMap narrative, web map symbolized by legal status with FAA UAS Facility Map data as a reference layer, and file geodatabase exports"
      ],
      figures: [
        { src: "images/flyspots-map.jpg", wide: true, alt: "Web map of north metro Adams County with launch zones colored by legal status over satellite imagery", caption: "Project area map. Launch zones are colored by legal status: green allowed with conditions, orange roadside right-of-way, red closed. The gray grid to the southeast is FAA UAS Facility Map data around Denver International Airport." },
        { src: "images/flyspots-sats.jpg", wide: true, alt: "Stacked area chart of predicted satellites in view by constellation from 10:00 to 16:00", caption: "Predicted satellites in view near Brighton on November 15, 2026, 10:00 to 16:00 MST, 10 degree elevation cutoff. Source: Trimble GNSS Planning Online." },
        { src: "images/flyspots-dop.jpg", wide: true, alt: "Line chart of predicted geometric, time, position, horizontal and vertical DOP values from 10:00 to 16:00", caption: "Predicted DOP values for the same window. Position DOP stays under 1.0, so satellite geometry was not a limiting factor. Source: Trimble GNSS Planning Online." },
        { src: "images/flyspots-riverdale.jpg", wide: true, alt: "New picnic shelter and graded ground at Riverdale Regional Park during construction", caption: "Riverdale Regional Park on survey day. The county's designated drone drop-in area here was closed for construction, so the site is recorded as Closed." }
      ],
      deliverables: [
        "ArcGIS StoryMap covering purpose, needs assessment, mission planning, methodology, processing, quality control, export, analysis and conclusions",
        "Public web map with launch zones symbolized by legal status, plus hazards, restricted areas, parking and access routes",
        "24 GPS-collected features: 6 launch zones, 6 hazards, 5 access routes, 4 parking points, 3 restricted areas",
        "File geodatabase exports of both hosted feature layers",
        "Self-hosted interactive map of the November survey on this site"
      ],
      knowsAbout: ["GPS data collection", "ArcGIS Field Maps", "UAS site assessment", "Part 107", "ArcGIS StoryMaps", "GIS", "Coursework"],
      links: [
        { label: "Read the StoryMap", url: "https://storymaps.arcgis.com/stories/320c424c7c514b118fa176b186defa00", primary: true },
        { label: "Interactive map", url: "map/flyspots/" },
        { label: "ArcGIS web map", url: "https://dugis.maps.arcgis.com/apps/mapviewer/index.html?webmap=c47a0d3d0a154607aac5115ee420b8d7" }
      ]
    },

    {
      // ---- BRIGHTON-2026-10 | Brighton Parks and Trails GPS Map ----
      // Coursework: DU GIS and UAS certificate, GPS assignment
      project_id: "BRIGHTON-2026-10",
      project_name: "Brighton Parks and Trails GPS Map",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "11 October 2026",
      site_address: "Brighton, CO",
      county: "Adams County",
      state: "CO",
      owner_name: "",

      hero_shot: "",
      thumbnail: "",

      summary: "Eleven parks and trails around Brighton, Colorado, each with a find-it hint, published as a GPX file for handheld GPS apps and as a public web map.",
      overview: "An early lab in GIS 4690, GPS for GIS, in the University of Denver GIS and UAS certificate. Eleven public parks and trails around Brighton are recorded as points with a name, category (city park, neighborhood park, regional park, state park, or trail), description, find-it hint, and difficulty rating. The points were exported from ArcGIS Pro with Features To GPX so they load into phone and handheld GPS apps, and the same data is published as a web map symbolized by category with name labels and a trimmed popup.",
      key_technical_challenge: "Getting clean GPX waypoints out of ArcGIS Pro, then publishing the same data online without exposing the editable source layer.",

      flight: null,
      processing: { software: "ArcGIS Pro, ArcGIS Online" },
      crs: {
        horizontal: "WGS 84 (GPX); Web Mercator (web map)",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Point features for eleven parks and trails with category, description, hint, and difficulty attributes",
        "Features To GPX export in ArcGIS Pro for use in GPS apps",
        "Hosted feature layer in ArcGIS Online, shared publicly as a read-only view layer",
        "Web map symbolized by category with name labels and a trimmed popup"
      ],
      deliverables: [
        "GPX file of eleven parks and trails",
        "Public web map"
      ],
      links: [
        { label: "Web map", url: "https://dugis.maps.arcgis.com/apps/mapviewer/index.html?webmap=9dffcc37fd2c417998cc5b4520fd454c", primary: true },
        { label: "GPX file", url: "reports/BRIGHTON_Parks_Trails.gpx" },
        { label: "Course final project", url: "work/flyspots-2026-10/" }
      ]
    },

    {
      // ---- SAFESPOTS-2026-10 | Safe Drone Flying Spots ----
      // Coursework: GIS 4690, University of Denver
      project_id: "SAFESPOTS-2026-10",
      project_name: "Safe Drone Flying Spots Survey",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "24 October 2026",
      site_address: "Brighton, CO",
      county: "Adams County",
      state: "CO",
      owner_name: "",

      hero_shot: "",
      thumbnail: "",

      summary: "A Survey123 log of 14 places I have flown my drone, rated for safe recreational flying with field notes on hazards, published as a web map and an Instant App.",
      overview: "A mid-course lab in GIS 4690, GPS for GIS, at the University of Denver. A Survey123 form records recommended drone launch sites from personal flight history and field notes, including hazards at each site. All 14 sites sit in Class G airspace with no LAANC grid. The results are published through a read-only public view layer, a web map, and an Instant App with a sidebar for browsing the sites.",
      key_technical_challenge: "Turning personal flight history into a consistent, repeatable survey that other pilots could use to judge a launch site.",

      flight: null,
      processing: { software: "ArcGIS Survey123, ArcGIS Online, ArcGIS Instant Apps" },
      crs: {
        horizontal: "WGS 84 / Web Mercator",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Survey123 form for launch site, safety rating, and hazard notes",
        "Airspace check for each site (Class G, no LAANC grid)",
        "Results published as a read-only public view layer",
        "Web map and Instant App sidebar for browsing"
      ],
      deliverables: [
        "Survey123 form and 14 survey results",
        "Public web map",
        "Instant App"
      ],
      links: [
        { label: "Instant App", url: "https://dugis.maps.arcgis.com/apps/instant/sidebar/index.html?appid=77c787249c854caa8a0756db58354e94", primary: true },
        { label: "Web map", url: "https://dugis.maps.arcgis.com/apps/mapviewer/index.html?webmap=43bdd9fdac3e4b67922b06dcf03c2467" },
        { label: "Course final project", url: "work/flyspots-2026-10/" }
      ]
    },

    {
      // ---- RONDONIA-2026-11 | Amazon land-cover classification ----
      // Coursework: DU GIS 4700 Remote Sensing I, Lab 8. Guided lab on course-provided data.
      project_id: "RONDONIA-2026-11",
      project_name: "Amazon Deforestation Land-Cover Classification",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "13 November 2026",
      site_address: "Rondônia, Brazil",
      county: "",
      state: "",
      owner_name: "",

      hero_shot: "images/rondonia-hero.jpg",
      thumbnail: "images/rondonia-hero.jpg",

      summary: "Three classifiers run on one Landsat 7 scene of Amazon deforestation and checked against a published reference map: which ones separate forest, pasture, regrowth, and burn scars, and where each one fails.",
      overview: "A guided lab from Remote Sensing I at the University of Denver, using a Landsat 7 ETM+ scene (24 August 2000) of fishbone-pattern clearing in Rondônia, Brazil. The question was practical: if you need a land-cover map of an active deforestation front, how much does the choice of classifier matter? Six training classes (primary forest, pasture, second-growth forest, urban and bare soil, water, burn scar) were digitized as regions of interest in ENVI, then used to run Minimum Distance and Maximum Likelihood classifications. ISODATA unsupervised clustering was run at 3, 5, and 8 clusters for comparison. Every result was compared with the reference classification from Roberts et al. (2002). The left half of the image above is the 5-4-3 false-color composite; the right half is the Maximum Likelihood result for the same ground.",
      key_technical_challenge: "Second-growth forest and burn scars occur in small, irregular patches, so it is hard to find pure training and test pixels for them. An independent second-growth test area scored highest for burn scar, not second-growth, which showed the sample was mixed and that these two classes are the weak point of every method tried.",
      lessons_learned: "Classifier choice matters most for the spectrally variable classes. A classifier that models class variance (Maximum Likelihood) held pasture together where a means-only classifier (Minimum Distance) broke it apart. Unsupervised clusters are spectral groupings, not land uses: the town and bright pasture never separated, even at 8 clusters. Area percentages here were measured over one screen extent and are approximate, and no formal accuracy assessment (confusion matrix) was part of the exercise.",

      results: [
        "Maximum Likelihood tracked the reference map best. Over the comparison extent it mapped about 22% pasture and 3% urban, against 29% and 2% in the reference.",
        "Minimum Distance labeled about 11% of the area urban and only 12% pasture, because bright and dry pasture pixels sit closer to the urban mean than to the pasture mean.",
        "Rule-image scores showed primary forest is most easily confused with second-growth (-5.2 vs. -10.1) and least with pasture (-80.0).",
        "ISODATA needed 8 clusters before water separated, and never produced an urban cluster."
      ],
      figures: [
        { src: "images/rondonia-543.jpg", caption: "Landsat 7 ETM+ 5-4-3 false-color composite. Forest is dark green, pasture is pink, burn scars are dark purple." },
        { src: "images/rondonia-reference.jpg", caption: "Reference classification (Roberts et al. 2002) used as the benchmark." },
        { src: "images/rondonia-mindist.jpg", caption: "Minimum Distance. Large pastures break into urban (thistle) and scattered water (blue)." },
        { src: "images/rondonia-maxlike.jpg", caption: "Maximum Likelihood. Pastures hold together and urban is limited to the town and bare fields." },
        { src: "images/rondonia-isodata8.jpg", caption: "ISODATA, 8 clusters, relabeled to the same legend. Forest and pasture are captured; urban is not." }
      ],

      flight: null,
      processing: { software: "ENVI 6.1" },
      crs: {
        horizontal: "UTM Zone 20 South, South American 1969 (30 m pixels)",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "5-4-3 false-color composite for visual interpretation of the six classes",
        "Six training ROIs, five small rectangles each, spread across the scene",
        "Supervised classification: Minimum Distance and Maximum Likelihood, with rule images",
        "Independent test ROIs and rule-image statistics to measure class confusion",
        "ISODATA unsupervised clustering at 3, 5, and 8 clusters, each relabeled to the reference legend",
        "Side-by-side comparison of every result with the reference classification"
      ],
      deliverables: [
        "Two supervised classification rasters with rule images",
        "Three ISODATA classification rasters",
        "Training and test ROI files",
        "Written analysis of class confusion and method comparison"
      ],
      knowsAbout: ["remote sensing", "land-cover classification", "Landsat", "ENVI", "supervised classification", "ISODATA", "deforestation mapping"],
      links: []
    },

    {
      // ---- MANAUS-2026-11 | Radar flood mapping ----
      // Coursework: DU GIS 4700 Remote Sensing I, Lab 6. Guided lab on course-provided data.
      project_id: "MANAUS-2026-11",
      project_name: "Amazon Flood Mapping with Two-Date Radar",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "7 November 2026",
      site_address: "Manaus, Amazonas, Brazil",
      county: "",
      state: "",
      owner_name: "",

      hero_shot: "images/manaus-hero.jpg",
      thumbnail: "images/manaus-hero.jpg",

      summary: "Low-water and high-water L-band radar mosaics of the Amazon at Manaus combined into one change composite that shows where forest floods and where open water expands, through cloud cover that blocks optical sensors.",
      overview: "A guided lab from Remote Sensing I at the University of Denver. Two JERS-1 L-band SAR mosaics from the Global Rain Forest Mapping project cover the meeting of the Rio Negro and the Solimões at Manaus: one at low water (August to September 1995) and one at high water (May to June 1996). Loading the low-water image as red and the high-water image as green and blue turns seasonal change into color. Cyan marks forest that floods at high water. Red marks floodplain that becomes open water. Gray and pink tones are upland forest that does not change, and the river channels stay black. The same lab opened with an ERS-2 C-band scene of Salt Lake City, used to work out the sensor look direction and to identify foreshortening and layover in the Wasatch foothills.",
      key_technical_challenge: "The two mosaics are not radiometrically matched, so brightness cannot be compared directly between dates. Each surface had to be read relative to its surroundings within one image, then confirmed with pixel values at seven sample targets.",
      lessons_learned: "Radar brightness is about roughness, geometry, and moisture, not color. Flooded forest is brighter than dry forest because the signal bounces from the water surface to the trunks and back, while open water is dark because it reflects the signal away. A two-date color composite is a fast first-pass change map, and it works in the wet tropics where cloud-free optical imagery is rare.",

      results: [
        "Floodplain (várzea) forest stands out in cyan: it brightens at high water, when standing water under the canopy creates a double bounce off the trunks.",
        "Floodplain at 957, 787 dropped from 158 to 37 as it went under open water, showing as red.",
        "The city of Manaus stayed near saturation on both dates (255 and 177) from corner-reflector returns.",
        "In the ERS-2 scene, bright west-facing slopes and building faces showed the sensor was looking west."
      ],

      flight: null,
      processing: { software: "ENVI 6.1" },
      crs: {
        horizontal: "JERS-1 GRFM mosaics, about 100 m pixels; ERS-2 scene in slant range, not georeferenced",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Grayscale interpretation of backscatter for water, city, rain forest, and pasture",
        "Linked displays to compare low-water and high-water mosaics",
        "Two-date false-color composite: low water in red, high water in green and blue",
        "Pixel-value sampling at seven targets to tie each color to a scattering mechanism",
        "ERS-2 C-band scene: look direction, specular and double-bounce targets, foreshortening and layover"
      ],
      deliverables: [
        "Two-date radar change composite",
        "Target table linking color, backscatter values, and land-cover change",
        "Written interpretation of radar geometry and scattering"
      ],
      knowsAbout: ["remote sensing", "synthetic aperture radar", "SAR", "JERS-1", "ERS-2", "flood mapping", "change detection", "ENVI"],
      links: []
    },

    {
      // ---- FRONTRANGE-2026-11 | Vegetation indices ----
      // Coursework: DU GIS 4700 Remote Sensing I, Lab 7. Guided lab on course-provided data.
      project_id: "FRONTRANGE-2026-11",
      project_name: "Front Range Vegetation Indices and Seasonal Change",
      category: "Coursework",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "7 November 2026",
      site_address: "Boulder and the Front Range",
      county: "",
      state: "CO",
      owner_name: "",

      hero_shot: "images/frontrange-ndvi-hero.jpg",
      thumbnail: "images/frontrange-ndvi-hero.jpg",

      summary: "NDVI and Simple Ratio computed from June and September Landsat 5 scenes of the Colorado Front Range, measured over nine land-cover types to show what each index can and cannot tell you.",
      overview: "A guided lab from Remote Sensing I at the University of Denver, using two Landsat 5 TM surface reflectance scenes of Boulder and the Front Range (21 June and 25 September 2010). The Simple Ratio (NIR divided by red) and NDVI were calculated in ENVI, then sampled with small regions of interest over nine land-cover types, from irrigated crops to downtown Denver. The chart above shows the September means. The two indices rank the classes the same way but behave differently at the ends of the range: NDVI spreads out sparse vegetation and separates vegetated from non-vegetated surfaces at about 0.2, while the Simple Ratio keeps climbing in dense canopies where NDVI flattens out. Comparing June with September then showed how harvest, leaf color change, clouds, and cloud shadow each move NDVI.",
      key_technical_challenge: "Testing whether a ratio index cancels terrain shading. Two conifer pixels on opposite sides of a ridge gave NDVI of 0.447 (sunlit) and 0.599 (shaded). Part of that gap is real, since north-facing slopes carry denser forest, so shading and vegetation could not be fully separated from two pixels.",
      lessons_learned: "NDVI measures green leaf cover visible from above, not biomass or land use: an irrigated park scored higher than conifer forest. Use NDVI for sparse cover and vegetation masks, and an unbounded ratio where canopies are dense. Two dates beat one, because the seasonal curve identifies a crop better than any single value. Class means came from small hand-drawn samples, so they describe those samples, not the whole scene.",

      results: [
        "September NDVI ranged from 0.831 (irrigated crop) to 0.055 (water); senesced grass at 0.275 was the lowest vegetated class.",
        "Simple Ratio ran from 10.9 down to 1.1, with all non-vegetated classes below about 1.5.",
        "Field 1 rose from 0.391 in June to 0.719 in September (a late-season row crop); Field 2 fell from 0.686 to 0.168 (harvested, consistent with a small grain).",
        "An aspen stand dropped from 0.734 to 0.610 as leaves turned; a June cloud drove NDVI to -0.360 over forest that read 0.544 in September."
      ],

      flight: null,
      processing: { software: "ENVI 6.1" },
      crs: {
        horizontal: "Landsat 5 TM, path 34 row 32, 30 m pixels",
        vertical: "",
        image: ""
      },
      parcel_stats: null,
      coverage_acres: null,

      methods: [
        "Simple Ratio by band math and NDVI from red (band 3) and NIR (band 4) surface reflectance",
        "2D scatter plot of Simple Ratio against NDVI to show where each index saturates",
        "Nine land-cover ROIs with mean index statistics",
        "Sunlit and shaded slope comparison for the same land cover",
        "June to September NDVI change, sorted into land-cover change, phenology, and atmospheric effects"
      ],
      deliverables: [
        "Simple Ratio and NDVI rasters for two dates",
        "Land-cover index table and scatter plot",
        "Seasonal change table with pixel locations and causes"
      ],
      knowsAbout: ["remote sensing", "NDVI", "vegetation indices", "Landsat", "phenology", "change detection", "ENVI"],
      links: []
    },

    {
      // ---- GYATT-2025-12 — GyattChores ----
      // Software project. Uses the optional `stack` + `features` fields
      // (rendered by index.html and tools/build.mjs) instead of the drone blocks.
      project_id: "GYATT-2025-12",
      project_name: "GyattChores",
      category: "Software",
      status: "Live",
      portfolio_worthy: "Yes",
      confidential: "No",

      hero_shot: "images/gyattchores-logo.svg",
      thumbnail: "images/gyattchores-logo.svg",

      summary: "A local-first, gamified family chore tracker. Kids log chores and parents approve them with a PIN; points feed daily and weekly leaderboards where the week's leader wears the 👑. Built as a single-file React 18 PWA that writes to localStorage first and syncs to Supabase only when the network allows — with a native SwiftUI companion for iPhone and Apple Watch.",
      overview: "GyattChores began as a cloud-dependent React app and was rebuilt around a local-first architecture: every chore is written to the browser's localStorage instantly, so logging never blocks on the network and the app keeps working fully offline. When the shared Supabase backend is reachable, logs sync across devices in the background — local storage stays the source of truth and the cloud is a best-effort sync layer. The web app is a single self-contained HTML file (React 18 via CDN, Babel Standalone, hand-written Material-inspired dark CSS) installable as a PWA on iOS and Android, and a native SwiftUI app brings the same chore-logging to iPhone and Apple Watch. The repository is run under a lightweight, ITIL 4-aligned service-management system with change-control and incident documentation.",
      key_technical_challenge: "Re-architecting from a network-blocking, cloud-first design to a local-first store that writes instantly and reconciles with Supabase in the background — keeping the parent-approval workflow trustworthy across devices without ever blocking a kid's tap on connectivity.",
      lessons_learned: "Three things stuck. Logging should never block on the network, so localStorage became the source of truth and the cloud a best-effort sync layer. Perfect business rules on paper don't survive contact with real users — watching kids game the easy chores forced the real iteration. And enable row-level security from day one: it takes ten minutes and prevents disasters. Architecture should follow team size and timeline, not dogma — a single-file app was the right call for a solo, fast-moving project.",

      stack: ["React 18", "Babel Standalone", "localStorage (offline-first)", "Supabase (optional sync)", "PostgreSQL + RLS", "SwiftUI (iPhone + Apple Watch)", "PWA / iOS + Android install", "GitHub Pages"],
      features: [
        "Local-first: every chore writes to localStorage instantly, so logging works fully offline and never blocks on the network",
        "Best-effort Supabase sync in the background when the shared backend is reachable, with local storage as the source of truth",
        "PIN-protected parent approval (with an 'approve all' shortcut) so points can't be self-awarded",
        "Daily and weekly point tallies per player, with a 👑 for the week's leader",
        "17 customizable chores with tunable point values",
        "Installable PWA for iOS and Android, plus a native SwiftUI app for iPhone and Apple Watch",
        "Run under a lightweight, ITIL 4-aligned service-management system (change control, incident docs)"
      ],
      knowsAbout: ["React", "offline-first architecture", "Supabase", "PostgreSQL", "SwiftUI", "watchOS", "progressive web app", "ITIL service management"],
      links: [
        { label: "Live App", url: "https://gyattchores.com", primary: true },
        { label: "Source on GitHub", url: "https://github.com/mattgiss/gyattchores" }
      ]
    },

    {
      // ---- RECUTER-2026-06 — Recuter ----
      project_id: "RECUTER-2026-06",
      project_name: "Recuter",
      category: "Software",
      status: "In Development",
      portfolio_worthy: "Yes",
      confidential: "No",

      hero_shot: "images/recuter-hero.svg",
      thumbnail: "images/recuter-hero.svg",

      summary: "An AI agent that applies to GIS jobs at the speed of a sneaker bot — it watches your job alerts, scores every new posting against your profile, tailors your resume and cover letter, and submits before the listing caps out. The landing page and Supabase-backed waitlist are live; the agent and a public job board are in active development.",
      overview: "Recuter targets a speed problem in hiring: a strong role can open at 9:02 and be capped at 150 applicants by 9:14, so a good fit loses simply by applying late — LinkedIn's applicant cap is 'functionally a sneaker drop.' The agent scores incoming postings against a candidate profile, auto-tailors resume bullets and cover letters to each description, and submits through headless browser automation across LinkedIn, Indeed, Greenhouse, and Workday-style portals, with human-in-the-loop review for edge cases like CAPTCHAs. A public job board surfaces a rolling shortlist of matched GIS roles tagged by pipeline status. The frontend is a static, dark-themed site (navy with mint-green accents) on Vercel and GitHub Pages; behind it sit a TypeScript agent and a Supabase backend with row-level security, where the browser only ever reads a curated 'board' view and Discord notifications are wired to GitHub activity. The initial market is entry- to mid-level GIS professionals, which ties the project back to my own field.",
      key_technical_challenge: "Reliable, low-latency form automation across very different application portals — with CAPTCHA handling and human review so every submission stays accurate — behind a Supabase schema whose row-level security exposes only a safe, curated board view to the public frontend.",

      stack: ["TypeScript", "Static HTML job board", "Supabase + Row-Level Security", "Vercel / GitHub Pages", "Headless browser automation", "Discord notifications"],
      features: [
        "Relevance scoring of every new posting against a candidate profile",
        "Automated resume-bullet and cover-letter tailoring per job description",
        "First-in-line headless submission across LinkedIn, Indeed, Greenhouse, and Workday-style portals",
        "Human-in-the-loop review for CAPTCHAs and edge cases",
        "Public job board with a rolling shortlist of matched GIS roles tagged by pipeline status (new, recommended, interviewing, applied, offer, closed)",
        "Supabase backend with row-level security; the frontend reads only a curated 'board' view",
        "Discord notifications tied to GitHub activity"
      ],
      knowsAbout: ["AI agents", "TypeScript", "automation", "Supabase", "row-level security", "Vercel", "GIS careers"],
      links: [
        { label: "Live Site", url: "https://recuter.com", primary: true },
        { label: "Source on GitHub", url: "https://github.com/mattgiss/recuter" }
      ]
    },

    {
      // ---- ARCHIVE-2026-06 — Photo & Video Archive Toolkit ----
      // Software project. Uses the optional `stack` + `features` fields.
      project_id: "ARCHIVE-2026-06",
      project_name: "Photo & Video Archive Toolkit",
      category: "Software",
      status: "Built",
      portfolio_worthy: "Yes",
      confidential: "No",

      hero_shot: "images/archive-hero.svg",
      thumbnail: "images/archive-hero.svg",

      summary: "A copy-only, hash-verified media pipeline that ingests camera cards and drives, date-sorts every photo and video by EXIF capture date, and indexes the whole collection into a searchable SQLite catalog — 90,484 files cataloged. Built in Python around exiftool and BLAKE2b checksums.",
      overview: "A personal media-archival system that turns a chaotic 90k-file photo and video collection into one date-sorted, integrity-checked, instantly searchable archive. The core engine reads each file's EXIF capture date, files it under PhotoArchive or VideoArchive by date, BLAKE2b-hashes every copy to prove it is byte-perfect, skips anything already backed up, and records it in a SQLite catalog so the drive never needs rescanning. Sidecars (Lightroom .xmp, .aae, DJI .lrf/.srt) travel with their media. A pull → cull → project-SSD workflow then queries the catalog by camera, GPS, orientation, drone, or 4K duration, pulls a hash-verified selection onto a working drive, and promotes the keepers to a project SSD. One-click .command buttons and an Apple Shortcuts action make 'dump my cards' a single tap.",
      key_technical_challenge: "Making the pipeline safe to trust and safe to re-run: every copy is hash-verified against its source, the whole process is idempotent (re-running only copies what is new), and sources are never modified — so a card can be formatted only after the tool confirms a byte-perfect, cataloged copy exists.",
      lessons_learned: "When the data is irreplaceable, copy-only, verify-before-trust, and idempotent re-runs matter more than speed. A self-cataloging archive — index on write, never rescan — is what makes 90k files actually usable: the SQLite catalog turns 'find the 4K geotagged drone clips over 30 seconds' into a single SQL query.",

      stack: ["Python 3", "SQLite", "exiftool", "BLAKE2b hashing", "rsync", "Bash", "Czkawka", "osxphotos", "Apple Shortcuts"],
      features: [
        "Copy-only, hash-verified ingest — BLAKE2b-checksums every file; originals are never modified",
        "Date-sorts photos and videos into PhotoArchive / VideoArchive by EXIF capture date",
        "Idempotent dedup: re-running only copies what is new, never duplicates",
        "Self-cataloging SQLite index of 90,484 files, queryable by camera, GPS, orientation, drone, and 4K duration",
        "Pull → cull → project-SSD workflow with saved query presets and hash-verified selections",
        "One-click 'Dump Cards' buttons plus an Apple Shortcuts action for menu-bar / Siri triggering"
      ],
      knowsAbout: ["Python", "SQLite", "data pipelines", "metadata / EXIF", "automation", "photo and video archival"],
      links: [
        { label: "Source on GitHub", url: "https://github.com/mattgiss/photo-archive-plugin", primary: true }
      ]
    }

    /* ---- TEMPLATE — copy this whole block (with the comma) and paste above ----
    ,{
      project_id: "XYZ123-YYYY-MM",
      project_name: "",
      category: "Personal",
      status: "Delivered",
      portfolio_worthy: "Yes",
      confidential: "No",
      delivery_date: "DD Month YYYY",
      site_address: "",
      county: "",
      state: "",
      owner_name: "",

      hero_shot: "",
      thumbnail: "",

      summary: "",
      overview: "",
      key_technical_challenge: "",
      lessons_learned: "",

      flight: {
        aircraft: "DJI Matrice 4E",
        sensor: '4/3" CMOS, 12.3 MP',
        altitude_agl_ft: 390,
        forward_overlap_pct: 80,
        side_overlap_pct: 70,
        rtk_correction_source: "Point One Navigation",
        total_images: 0,
        pct_calibrated: 100
      },

      processing: {
        software: "PIX4Dmatic v2.5.1",
        avg_gsd_ft_per_pixel: 0.111,
        dense_point_count: 0,
        median_2d_keypoint_matches: 0,
        camera_optimization_pct: 0,
        geolocation_rms_z_ft: 0
      },

      crs: {
        horizontal: "NAD83(2011) / [State] (EPSG:0000)",
        vertical: "NAVD88 GEOID18 (US Survey Feet)",
        image: "WGS84 + EGM96"
      },

      parcel_stats: {
        acres: 0,
        perimeter_miles: 0,
        dtm_min_ft: 0,
        dtm_max_ft: 0,
        dtm_mean_ft: 0,
        slope_mean_deg: 0,
        slope_max_deg: 0
      },

      coverage_acres: 0,
      methods: [],
      deliverables: [],
      links: [
        { label: "Delivery Report (PDF)", url: "", primary: true },
        { label: "Quality Report (PDF)", url: "" }
      ]
    }
    ---- end template ---- */

  ];

  /* ==========================================================
     Category metadata — drives tag color + filter chips.
     Matches the enum in inputs_schema.md / project_inputs_template.yaml.
     ========================================================== */

export const CATEGORIES = {
    "Personal":               "tag-personal",
    "Agriculture":            "tag-agriculture",
    "Telecom Infrastructure": "tag-telecom",
    "Thermal Imaging":        "tag-thermal",
    "LiDAR":                  "tag-lidar",
    "Construction":           "tag-construction",
    "Forensic":               "tag-forensic",
    "Coursework":             "tag-coursework",
    "Internship":             "tag-internship",
    "Software":               "tag-software"
  };
