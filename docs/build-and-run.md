# Build, Run, and Tooling

## Prerequisites
- Ruby, Bundler, and Node.js
- Linux example:
  ```bash
  sudo apt update && sudo apt install -y ruby-dev ruby-bundler nodejs build-essential gcc make
  ```
- macOS example:
  ```bash
  brew install ruby node
  gem install bundler
  ```

## Install dependencies
```bash
# Ruby gems (inside repo root)
bundle config set --local path 'vendor/bundle'   # optional: install gems locally
bundle install

# Node packages (for JS build)
npm install
```

If you see permission errors when installing gems system-wide, prefer the local path config shown above.

## Serve locally
```bash
# Option A
type -p jekyll >/dev/null || echo "jekyll not in PATH (try: bundle exec jekyll ...)"
jekyll serve -l -H localhost

# Option B (recommended to use your local bundle)
bundle exec jekyll serve -l -H localhost
```

Access the site at `http://localhost:4000`.

## JavaScript build
```bash
# One-off build
npm run build:js

# Watch and rebuild on changes
npm run watch:js
```

Outputs a minified bundle to `assets/js/main.min.js`.

## Docker
If you have Docker installed, build and run via Compose:
```bash
docker compose up
```
Then open `http://localhost:4000`.

## Content generation (Python)
See [python-scripts.md](./python-scripts.md) for generating `_talks/` and `_publications/` content and building the talk map.
