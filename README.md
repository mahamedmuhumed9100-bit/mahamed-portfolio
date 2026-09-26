# Mahamed Muhumed — Portfolio

My personal portfolio site: who I am, what I've built, and how to reach me.
Built from scratch with plain **HTML, CSS and JavaScript** — no framework, no
build step — and hosted on GitHub Pages.

## Featured projects

| Project | Stack | Highlights |
|---|---|---|
| [**JobTracker**](https://github.com/mahamedmuhumed9100-bit/job-tracker) | ASP.NET Core MVC · EF Core · PostgreSQL · Docker | Identity auth, one-to-many status history, 16 xUnit tests, CI, [live on Render](https://jobtracker-j294.onrender.com) |
| [**Algorithm Visualizer**](https://github.com/mahamedmuhumed9100-bit/algo-visualizer) | React 19 · Vite · Vitest | 6 sorting + 4 pathfinding algorithms from scratch, hand-written binary heap, 100 tests, CI/CD to [GitHub Pages](https://mahamedmuhumed9100-bit.github.io/algo-visualizer/) |
| [**Eddy AI**](https://github.com/mahamedmuhumed9100-bit/eddy-ai) | Flask · OpenAI · SQLite · pytest | Validated structured LLM output, per-user history, CSRF, rate limiting, role-based admin, 29 tests |

## How the site works

- **Light/dark theme** driven by CSS custom properties, so the whole palette
  switches from a single set of variables
- **Responsive** layout with CSS Grid (`auto-fit` + `minmax`) — no media-query
  soup for the project grid
- **Vanilla JS** in [`script.js`](script.js): theme toggle that follows the OS
  preference by default and remembers your choice (with a safe fallback when
  `localStorage` is blocked)
- Downloadable CV in [`assets/`](assets/)

## Running locally

No build step — open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Contact

- ✉ mahamedmuhumed9100@gmail.com
- [LinkedIn](https://www.linkedin.com/in/mahamed-muhumed-972848310/)
