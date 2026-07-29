# Playwright Automation Framework (PLAYWRIGHT_AU)

A Playwright-based UI and API test automation framework with a scheduled GitHub Actions CI pipeline for automated daily execution and reporting.

## Features

- End-to-end UI test automation using **Playwright**
- API test coverage (`api.spec.js`)
- Modular, reusable test structure under `tests/`
- Automated daily test execution via **GitHub Actions**
- HTML test reports published as workflow artifacts

## Project Structure

```
PLAYWRIGHT_AU/
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI pipeline configuration
├── tests/
│   ├── api.spec.js              # API test cases
│   ├── example.spec.js          # Sample Playwright test
│   ├── firstprctice.spec.js     # UI test cases
│   └── myownProgramme.spec.js   # UI test cases
├── playwright.config.js         # Playwright configuration
├── package.json
└── package-lock.json
```

## Prerequisites

- Node.js 18 or later
- npm

## Installation

```bash
git clone https://github.com/shreyas2001/PLAYWRIGHT_AU.git
cd PLAYWRIGHT_AU
npm install
npx playwright install
```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/api.spec.js
```

Run tests in headed mode (visible browser):
```bash
npx playwright test --headed
```

Open the last HTML report:
```bash
npx playwright show-report
```

## CI/CD Pipeline

Tests are automatically executed via **GitHub Actions** on a **daily schedule at 12:30 PM IST**. The workflow:

1. Checks out the repository
2. Installs dependencies and Playwright browsers
3. Runs the full test suite
4. Publishes the HTML test report as a downloadable workflow artifact

The pipeline can also be triggered manually from the **Actions** tab.

Workflow file: `.github/workflows/playwright.yml`

## Test Coverage

- **UI Tests** — form interactions and page-level functional flows (`example.spec.js`, `firstprctice.spec.js`, `myownProgramme.spec.js`)
- **API Tests** — request/response validation (`api.spec.js`)

## Author

[Shreyas Manjunath](https://github.com/shreyas2001)
