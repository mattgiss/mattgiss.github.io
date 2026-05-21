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
      summary: "First end-to-end RTK photogrammetric deliverable for a 66-acre rural property in Orangeburg County, SC. Includes orthomosaic, DSM, DTM, classified point cloud, and 5-ft contours packaged into a 26-page Delivery Report.",
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
      site_address: "Staged scene, New Mexico",
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
    "Internship":             "tag-internship"
  };;
