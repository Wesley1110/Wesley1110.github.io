# Wesley Academic Website (GitHub Pages + Jekyll)

This is a minimal, clean academic-style website:
- Pages: Home, Research, Code, Teaching
- Light/dark theme toggle
- No external theme required (pure CSS)
- Easy to edit: navigation in `_config.yml`

## Quick Deploy (User Site)
1. Download the ZIP from your ChatGPT session and extract it.
2. Create (or open) the repo **`Wesley1110/Wesley1110.github.io`** on GitHub.
3. Drag & drop **all** files/folders into the repo and commit.
4. Wait ~1 minute; visit: `https://Wesley1110.github.io`

> Note: For user sites (`username.github.io`), Pages is auto-enabled; no extra settings needed.

## Customize
- Replace `assets/img/profile.jpg` with your photo.
- Update name/links in `_config.yml` and in `index.md`.
- Edit page content in `pages/*.md`.

## Add a PDF CV
- Put `cv.pdf` under `assets/` and change the "CV (PDF)" link in `index.md` to `/assets/cv.pdf`.

## New Pages
- Create `pages/newpage.md` with:
  ```yaml
  ---
  layout: default
  title: "New Page"
  permalink: /pages/newpage.html
  ---
  # Content here
  ```
- Add to navigation via `_config.yml` → `nav:`.

## Local Preview (optional)
If you want to run locally (requires Ruby & Jekyll):
```bash
gem install bundler jekyll
jekyll serve --livereload
```