# gissentanna.com

Static site for `gissentanna.com`, hosted on GitHub Pages. The domain is registered at GoDaddy and pointed here via DNS.

## Layout

```
/                       (root — redirects to /matthew/ for now)
├── CNAME               (gissentanna.com)
├── .nojekyll           (skip Jekyll processing)
├── robots.txt          (allows all crawlers, points to sitemap)
├── sitemap.xml         (hand-maintained — add a <url> per new page)
├── index.html          (1-line meta-refresh redirect to /matthew/)
└── matthew/            (Matthew's drone-mapping portfolio)
    ├── index.html      (the whole portfolio — single page, no build step)
    ├── images/         (headshot + project hero shots, optimized for web)
    ├── reports/        (ECSC 2019 + 2023 Pix4D reports)
    └── blog/           (Field Notes — UAS/photogrammetry posts)
        ├── index.html              (blog landing / post list)
        ├── blog.css                (shared brand styles for the blog)
        ├── _post-template.html     (copy this to add a post)
        └── <slug>/index.html       (one folder per post = clean URL)
```

Future sections (e.g. `/family/`) drop in as sibling folders. Replace the root `index.html` with a real hub page when there's more than one section worth linking to.

## SEO & analytics

The portfolio and blog pages carry the Google Tag Manager snippet (container `GTM-KTJSH5SZ`, which loads GA4 `G-E4FJX190R7`), Open Graph/Twitter tags, a canonical link, and JSON-LD structured data. Setup steps for GA4 / GTM / Search Console and the Claude GSC MCP audit workflow live in `../SETUP.md` (kept outside this public repo).

## Adding a blog post

Copy `matthew/blog/_post-template.html` to `matthew/blog/<slug>/index.html`, fill the `{{PLACEHOLDERS}}`, link back to a relevant project via `/matthew/#<project_id>`, then add a `<li>` to `matthew/blog/index.html` and a `<url>` to `sitemap.xml`.

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
