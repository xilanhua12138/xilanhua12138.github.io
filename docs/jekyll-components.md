# Jekyll Components (Layouts, Includes, Pages)

This site is built with Jekyll and the Academic Pages theme. Below are the primary public components and how to use them.

## Layouts (`_layouts/`)

- `default.html`: Base HTML shell. Injects `<head>`, masthead, footer, and includes `scripts.html`.
- `single.html`: Standard page/post layout with title, metadata, taxonomy, optional hero image, and sharing/comments support.
- `archive.html`: Archive/list layout used by index-like pages (e.g., Publications, Talks) to render collections.
- `talk.html`: Specialized layout for items in the `talks` collection; shows talk-specific metadata.
- `splash.html`: Minimal layout for splash/landing content.
- `compress.html`: Wraps output with HTML compression (used by `default`).

Usage:
Set `layout:` in a page/post front matter:
```yaml
---
layout: single
title: "My Page"
author_profile: true
---
```

## Includes (`_includes/`)

- `author-profile.html`: Renders the author sidebar. Populates from `site.data.authors[page.author]` or `site.author`.
  - Common fields: `avatar`, `name`, `pronouns`, `bio`, `location`, `employer`, `email`, plus many social/profile links (GitHub, Google Scholar, ORCID, LinkedIn, YouTube, Zhihu, etc.).
  - Enable per page via `author_profile: true` (usually set by defaults in `_config.yml`).

- `archive-single.html`: Renders a single item within a list/archive. Expects `post` to be in scope (inside a `{% for post in ... %}` loop).
  - Shows title, date/read time, excerpt, and optional citation/paper/slides links.

- `archive-single-talk.html` and `archive-single-talk-cv.html`: Variants for listing talks (standard and condensed CV style).

- `masthead.html`: Top navigation bar, backed by `_data/navigation.yml`.

- `head.html`: SEO, meta, stylesheet links. Uses `include seo.html` and sets icons/manifest tags.

- `footer.html`: Social links, RSS link, and site credits. Includes a visitor stats map container (removable/customizable).

- `scripts.html`: Loads `assets/js/main.min.js` and analytics include.

- `toc`: Adds a right-hand table of contents to a page where included.
  ```liquid
  {% include toc title="Contents" icon="list" %}
  ```

- `base_path`: Helper include that sets a `base_path` variable for consistent asset linking.

Other includes exist (e.g., `page__hero.html`, taxonomy, pagination), inherited from the theme and used by the layouts.

## Data and Collections

- Navigation (`_data/navigation.yml`):
  ```yaml
  main:
    - title: "Publications"
      url: /publications/
    - title: "CV"
      url: /cv/
  ```
  Add, remove, or reorder entries to change the masthead menu.

- Collections (`_config.yml`): `teaching`, `publications`, `portfolio`, `talks` are enabled with permalinks. Create items under corresponding `_collection/` folders.

## Archive Pages (`_pages/`)

- `publications.html` (layout: `archive`): Lists items in `site.publications`. If `publication_category` is defined in `_config.yml`, renders sections by category.
  ```liquid
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
  ```

- `talks.html` (layout: `archive`): Lists items in `site.talks` using `archive-single-talk.html`. If `site.talkmap_link == true`, shows a link to the talk map page.

- `talkmap.html`: Embeds the generated map from the `talkmap/` folder.

- `cv.md`: Embeds a PDF CV from the `files/` directory.

## Examples

- Turn on the author profile sidebar for a page:
```yaml
---
layout: single
title: "About"
author_profile: true
---
```

- Add a table of contents to a long page:
```liquid
{% include toc title="Contents" %}
```
