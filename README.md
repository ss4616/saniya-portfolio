# Saniya Saad — Portfolio

An original midnight-blue and ivory portfolio, organized into introduction, about, experience, skills, projects, and contact sections. 

## Preview

Extract this ZIP and open index.html in a browser. No installation is needed.

## Update GitHub Pages

Upload the extracted files to the root of ss4616/saniya-portfolio and commit to main. 

If Pages is not enabled, open Settings → Pages and select Deploy from a branch → main → /(root), then Save. If already enabled, committing the updated files starts the next deployment.

## Edit

- index.html: content, contact links, and project notes
- style.css: colors, typography, responsive layout, and print styles
- script.js: browser printing with expanded case studies

The PDF button prints the portfolio; it is not a resume download. Employment dates, metrics, and certifications are not invented. Automation is described as hands-on exploration, not production ownership. Fonts use Google Fonts with system fallbacks.

## QA workspace 

Open `qa-suite.html` through a web server or on GitHub Pages. Starter assertions live in `cases.json`. The editor saves drafts only in your browser. Export the draft and replace the repository-root `cases.json` to make it part of the next run. No browser draft is uploaded automatically, and anonymous visitors cannot dispatch runs.

Supported editor checks: visible element, contained text, exact href, and element count. Each case must have a unique QA-001-style ID, a title, a local page path, a CSS selector, assertion, and expected string. For richer multi-step tests, edit `tests/portfolio.spec.js`.

### Enable real runs and published reports

1. Upload **all** extracted files and folders to your existing repository, including `.github/workflows/qa.yml`, `tests/`, and `qa-results/`. Keep their directory structure. A ZIP uploaded as a single file will not work.
2. In **Settings → Pages → Build and deployment**, change Source from “Deploy from a branch” to **GitHub Actions**. The workflow publishes the portfolio and reports together.
3. Open **Actions → Portfolio QA and Pages → Run workflow → main → Run workflow**. Future pushes to main also run the suite.
4. After the deployment completes, open `qa-suite.html` from your portfolio and refresh results. The first installation downloads Chromium and may take a few minutes.

The workflow tests only this portfolio served on localhost; it does not test client or third-party production systems. Committed tests run in Chromium. The starter suite includes four editable assertions and two multi-step tests (mobile navigation/overflow and project-note expansion). A failing test keeps the CI job failed while allowing its actual report to publish. Infrastructure failures can prevent report publication; inspect Actions in that case.

Use `npm install`, `npx playwright install chromium`, then `npm test` to run locally with Node.js and Python 3 installed. Reports are written to `qa-results/`; they contain actual Playwright outcomes. The shipped latest.json is intentionally empty, not a fabricated success report.

### Verification status

The case validator and reporter were checked with Node.js, including invalid inputs and failed-test reporting. JavaScript syntax checks passed. The Playwright browser suite and GitHub workflow have **not** been executed or deployed by this assistant; the connected integration previously rejected repository writes.
