# gissentanna.com

Static site for `gissentanna.com`, hosted on GitHub Pages. The domain is registered at GoDaddy and pointed here via DNS.

## Layout

```
/                       (root — redirects to /matthew/ for now)
├── CNAME               (gissentanna.com)
├── .nojekyll           (skip Jekyll processing)
├── index.html          (1-line meta-refresh redirect to /matthew/)
└── matthew/            (Matthew's drone-mapping portfolio)
    ├── index.html      (the whole portfolio — single page, no build step)
    ├── images/         (headshot + project hero shots, optimized for web)
    └── reports/        (ECSC 2019 + 2023 Pix4D reports)
```

Future sections (e.g. `/family/`, `/blog/`) drop in as sibling folders. Replace the root `index.html` with a real hub page when there's more than one section worth linking to.

## Updating the portfolio

To add or update a project, edit the `PROJECTS` array near the top of the `<script>` block in `matthew/index.html`. Each project is a JS object whose fields mirror the `inputs.yaml` schema from the `drone-mapping-deliverable` skill. Empty fields don't render.

Project hero images go in `matthew/images/`, then reference them as `images/your-file.jpg` (relative to the page).

PDFs for new coursework go in `matthew/reports/`, referenced as `reports/your-file.pdf`.

## Delivery Report PDFs

Client-facing Delivery Reports live in a separate repo (`mattgiss/deliverables`) and resolve at:

```
https://mattgiss.github.io/deliverables/{ParcelCode}_DeliveryReport.pdf
```

The portfolio links to them via fully-qualified URLs, so they're unaffected by site restructuring.
