# Configuration and Data

Key site-wide settings live in `_config.yml` and `_data/`. Below are the most relevant for customization.

## `_config.yml`

- `title`, `name`, `description`, `url`, `baseurl`, `repository`: Basic site identity and repo link.
- `author`: Sidebar author profile source with many optional social/profile fields (GitHub, Google Scholar, LinkedIn, Zhihu, etc.).
- `publication_category`: Optional map of category keys to titles used by `publications.html` to group publications.
- `talkmap_link`: If `true`, shows a link to the talk map on the talks page.
- `read_more`: Controls whether excerpts include a "Read more" link.
- `collections`: Enables output and permalinks for `teaching`, `publications`, `portfolio`, `talks`.
- `defaults`: Sets default front matter for posts/pages/collections (e.g., `layout`, `author_profile`, `share`).
- `plugins` and `whitelist`: Jekyll plugins used by the site.
- `sass`: SCSS directory and style.
- `permalink`, `timezone`: Output URL style and timezone.

Tip: After changing `_config.yml`, restart `jekyll serve` as Jekyll does not hot-reload config changes.

## `_data/navigation.yml`
Defines the masthead navigation menu.

```yaml
main:
  - title: "Publications"
    url: /publications/
  - title: "CV"
    url: /cv/
```

## Other data
- `_data/ui-text.yml`: Localized UI labels (e.g., "Read more", "Feed").
- `_data/authors.yml`: Optional map of author profiles, used when setting `page.author`.

## Files and assets
- `files/`: Static files like PDFs. Refer to them using absolute paths (e.g., `/files/cv.pdf`) or full URLs.
- `images/`: Icons and images used across the site.

## Collections file placement
- Posts: `_posts/`
- Talks: `_talks/`
- Publications: `_publications/`
- Teaching: `_teaching/`
- Portfolio: `_portfolio/`

Each collection item should include appropriate front matter fields referenced by the relevant layouts/includes (e.g., `title`, `date`, `venue`, `location`, `citation`, `paperurl`).
