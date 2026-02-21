# PlayWrightAutomation

Sensible starter repo for Playwright end-to-end tests.

Prerequisites
- Node.js (LTS)
- Git (for cloning and pushing)

Install

```bash
npm install
npx playwright install
```

Run tests

Run full suite:

```bash
npx playwright test
```

Run a single file:

```bash
npx playwright test tests/FirstCode.spec.js
```

Open HTML report

```bash
npx playwright show-report
# or open playwright-report/index.html in a browser
```

Notes
- This repo contains a mix of ESM (`import`) and CommonJS (`require`) test files. Do not normalize module formats or change `package.json` -> `type` without confirming.
- `playwright.config.js` sets `headless: false` (tests expect headed mode by default).

Helpful links
- Playwright: https://playwright.dev

If you want, I can also add a minimal CI workflow and a short contributing guide.
