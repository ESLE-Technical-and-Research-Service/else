# ELSE Project

A modern web application built with Next.js 15 and React 19, designed to showcase ELSE products and services with a flexible and reusable component architecture.

## Project Overview

This project is built using:
- **Next.js 15** with App Router architecture [https://nextjs.org/](https://nextjs.org/)
- **React 19** for UI components [https://react.dev/](https://react.dev/)
- **TypeScript** for type safety [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- **TailwindCSS** for styling [https://tailwindcss.com/](https://tailwindcss.com/)
- **Jest** and **React Testing Library** for unit testing [https://jestjs.io/](https://jestjs.io/)
- **Playwright** for end-to-end testing [https://playwright.dev/](https://playwright.dev/)
- **Framer Motion** for animations [https://motion.dev/](https://motion.dev/)

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended) [https://nodejs.org/en/download](https://nodejs.org/en/download)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd else
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.test.example` to `.env.test` for testing
   ```bash
   cp .env.test.example .env.test
   ```

### Development

Start the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
else/
├── assets/                # Static assets
├── components/            # Reusable UI components
│   └── src/
│       ├── layouts/       # Layout components with flexible ContentModel architecture
│       └── ...
├── context/               # React context providers
├── hooks/                 # Custom React hooks
├── public/                # Public static files
├── src/                   # Application source code
│   └── app/               # Next.js App Router pages
│       ├── about/         # About section
│       ├── manufacturers/ # Manufacturers section
│       ├── products/      # Products section
│       ├── services/      # Services section
│       ├── layout.tsx     # Root layout
│       └── page.tsx       # Home page
├── tests/                 # Test files
└── ...
```

## Component Architecture

The project uses a flexible component architecture, particularly for layouts. Key concepts include:

- **ContentModel**: A generic content model that allows layouts to be used with different types of content
- **Layout Components**: Reusable layout components that accept ContentModel props
- **Layout Selector**: A utility for selecting the appropriate layout based on content type

For more details, see the [Layouts Architecture documentation](./components/src/layouts/README.md).

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check and fix code style
- `npm run test:unit` - Run Jest unit tests
- `npm run test:e2e` - Run Playwright end-to-end tests
- `npm run test:e2e:debug` - Run Playwright tests in debug mode
- `npm run clean` - Clean build artifacts, node_modules, and test results

## Testing

### Unit Testing

Unit tests are written using Jest and React Testing Library:

```bash
npm run test:unit
```

### End-to-End Testing

E2E tests are written using Playwright:

```bash
npm run test:e2e
```

For debugging E2E tests:

```bash
npm run test:e2e:debug
```

## Contribution Guidelines

When contributing to this project:

1. Create a feature branch from the main branch
2. Make your changes following the project's code style
3. Write or update tests as necessary
4. Submit a pull request with a detailed description of your changes

Pull requests should include:
- A detailed description of the changes
- The type of change (bug fix, feature, refactor, etc.)
- Testing information (unit tests, integration tests, manual testing steps)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jest Documentation](https://jestjs.io/docs)
- [Playwright Documentation](https://playwright.dev/docs/intro)
