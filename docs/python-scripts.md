# Python Content Generators and Utilities

This project includes Python scripts for generating Markdown content and for building a clustered map of talk locations.

## Environment
Install required libraries (examples below). Use a virtual environment if preferred.

```bash
# Common dependencies
pip install pandas pybtex geopy python-frontmatter getorg
```

Note: Each script lists or implies its own dependencies. Install only what you need for the script(s) you will run.

## Talks Markdown Generator
File: `markdown_generator/talks.py`

- Input: `markdown_generator/talks.tsv` (tab-separated)
- Output: Markdown files in `./_talks/`
- Run from: the `markdown_generator/` directory

Usage:
```bash
cd markdown_generator
python talks.py
```

Required TSV columns:
- `title` (required)
- `url_slug` (required; used in filename/permalink)
- `date` (required; YYYY-MM-DD)
- `type` (optional; defaults to "Talk")
- `venue` (optional)
- `location` (optional)
- `talk_url` (optional)
- `description` (optional)

Minimal example (`talks.tsv`):
```text
title	type	url_slug	venue	date	location	talk_url	description
Deep Learning 101	Talk	deep-learning-101	YourConf	2024-05-01	NYC, USA	https://example.com	Introductory tutorial
```

## Publications Markdown Generator (TSV)
File: `markdown_generator/publications.py`

- Input: `markdown_generator/publications.tsv`
- Output: Markdown files in `./_publications/`
- Run from: the `markdown_generator/` directory

Usage:
```bash
cd markdown_generator
python publications.py
```

Required TSV columns:
- `pub_date` (YYYY-MM-DD)
- `title`
- `venue`
- `excerpt`
- `citation`
- `site_url`
- `paper_url` (optional)
- `url_slug` (used for filenames/permalinks)

Minimal example (`publications.tsv`):
```text
pub_date	title	venue	excerpt	citation	site_url	paper_url	url_slug
2024-03-01	Great Paper	Journal of Examples	Short blurb	Doe et al., 2024	https://example.com/paper	https://example.com/paper.pdf	great-paper
```

## Publications Markdown Generator (BibTeX)
File: `markdown_generator/pubsFromBib.py`

- Input: BibTeX files configured in `publist`
- Output: Markdown files in `./_publications/`
- Run from: the `markdown_generator/` directory

Usage:
```bash
cd markdown_generator
python pubsFromBib.py
```

Customize the `publist` mapping to point to your BibTeX files and venue keys:
```python
publist = {
  "proceeding": {
    "file": "proceedings.bib",
    "venuekey": "booktitle",
    "venue-pretext": "In the proceedings of ",
    "collection": {"name": "publications", "permalink": "/publication/"}
  },
  "journal": {
    "file": "pubs.bib",
    "venuekey": "journal",
    "venue-pretext": "",
    "collection": {"name": "publications", "permalink": "/publication/"}
  }
}
```

Tips:
- The script constructs a `url_slug` from the BibTeX title by stripping special characters.
- Outputs are written with UTF-8 encoding to `../_publications/`.

## Talk Map Generator
File: `talkmap.py`

Generates a clustered map of talks using locations from the front matter of Markdown files under `_talks/`.

Dependencies:
```bash
pip install python-frontmatter geopy getorg
```

Usage (run from repository root):
```bash
python talkmap.py
# Outputs to the talkmap/ folder (e.g., talkmap/map.html)
```

Notes:
- The script reads `_talks/*.md` and geocodes the `location` field via Nominatim.
- `TIMEOUT` controls geocoding timeout (default 5 seconds).
- Generated assets are written to the `talkmap/` directory and consumed by the page `_pages/talkmap.html`.
