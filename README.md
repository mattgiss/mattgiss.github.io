# gissentanna.com

Personal portfolio site for Matthew Gissentanna — drone mapping and aerial photogrammetry work.

Hosted on GitHub Pages. The domain `gissentanna.com` (registered at GoDaddy) is pointed at this repo via DNS.

## Files

- `index.html` — the whole site (single page, no build step)
- `images/` — headshot and project hero shots
- `CNAME` — tells GitHub Pages to serve this site at `gissentanna.com`
- `.nojekyll` — disables Jekyll processing so files with leading underscores aren't ignored

## Updating

To add a new project, edit the `PROJECTS` array near the top of the `<script>` block in `index.html`. Each project is a JS object whose fields mirror the `inputs.yaml` schema from the `drone-mapping-deliverable` skill. Empty fields don't render.

Project hero images go in `images/`, then reference them as `images/your-file.png` in the project's `hero_shot` and `thumbnail` fields.

Delivery Report PDFs live in a separate repo (`mattgiss/deliverables`) and resolve at:

  https://mattgiss.github.io/deliverables/{ParcelCode}_DeliveryReport.pdf
