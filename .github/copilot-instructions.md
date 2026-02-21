# Copilot / AI agent instructions for PlayWrightAutomation

Short guidance to help an AI agent be productive in this repo.

1. Repo purpose and layout
- This repository contains Playwright end-to-end tests in the `tests/` folder.
- Key config: `playwright.config.js` (project-level settings: `testDir`, `reporter`, timeouts, `use` options).
- HTML reports appear in `playwright-report/` (also present in the workspace).

2. How developers run things (explicit commands)
- Install dependencies: `npm install`.
- Ensure browsers are installed for Playwright: `npx playwright install`.
- Run the full test suite: `npx playwright test`.
- Run a single file: `npx playwright test tests/FirstCode.spec.js`.
- Open the HTML report: `npx playwright show-report` or open `playwright-report/index.html` in a browser.

3. Project-specific patterns and gotchas
- Mixed module styles: some tests use `import` (ESM) and others use `require` (CommonJS). Example files:
  - `tests/example.spec.js` uses `import`.
  - `tests/FirstCode.spec.js` uses `require`.
  Preserve the module style used in each file; do not convert files between ESM/CommonJS without confirming with the maintainer.
- `playwright.config.js` uses ESM `import` but `package.json` currently specifies `type: "commonjs"` — this mismatch is visible and can cause runtime issues. Do not change `package.json` automatically.
- `playwright.config.js` sets `headless: false` and `timeout: 40_000` (per-test expect timeout also set). Tests expect headed browser behavior by default.

4. Conventions to follow when editing tests
- Keep test files under `tests/` and use `*.spec.js` suffix.
- Use Playwright test fixtures (`test`, `expect`) from `@playwright/test` as shown in `example.spec.js`.
- When asserting titles or text, match the exact string only when the test uses exact equality (see `FirstCode.spec.js` which expects the full title string).

5. Automation & CI considerations
- There are no `scripts` in `package.json` — CI jobs call `npx playwright test` directly. If you suggest adding scripts, present them as optional and explain why.

6. Files to inspect when changing behavior
- `playwright.config.js` — change timeouts, reporter, headless setting.
- `tests/*` — examples of test patterns and mixed module usage.
- `playwright-report/` — review output artifacts after a run.

7. When to ask the human
- Before normalizing module formats (ESM vs CommonJS) or changing `package.json.type`.
- Before changing global test settings (`headless`, `timeout`, `reporter`).

If anything above is unclear or you want more examples (e.g., adding `npm` scripts or normalizing modules), tell me which part to expand.
