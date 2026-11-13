# Node.js Boilerplate (TypeScript, ESM, Env-ready)

This is a minimal and extensible boilerplate for Node.js projects using TypeScript.  
It works for CLI tools, backend, Electron, or any other project without being tied to frameworks or databases.

---

## Features

- Latest LTS Node.js
- TypeScript with strict type checking
- ESM (`module: nodenext`)
- ESLint + Prettier for code quality
- Vitest for testing
- Environment switcher (`.env.development`, `.env.test`, `.env.production`)
- Flexible script structure (`build`, `dev`, `start`, `debug`, `test`)
- Easily extendable (`build:electron`, `start:cli`, etc.)
- Bundling with `tsup` or plain TypeScript compilation

---

## Installation

1. Clone the repository:

```bash
git clone <repository> my-project
cd my-project
```

2. Install dependencies:

```bash
npm install
# or yarn
```

3. Create environment files based on .env.example:

```bash
cp .env.example .env.development
cp .env.example .env.test .env.test
cp .env.example .env.production .env.production
```

> .env files store environment variables. For production, use real secrets via CI/CD.

## Project Structure

```bash
src/           # Source code
tests/         # Tests
dist/          # Build output
tsconfig*      # TypeScript configs
tsup.config.ts # tsup bundler config
nodemon.json   # nodemon config for development
.env.*         # Environment files
```

## Scripts

Scripts are defined in package.json.

### Main scripts

| Script                          | Description                                              |
| ------------------------------- | -------------------------------------------------------- |
| `npm run start`                 | Run production build (`dist`) with `.env.production`     |
| `npm run build`                 | Main build using TypeScript (`tsc`)                      |
| `npm run dev`                   | Development mode with nodemon and `.env.development`     |
| `npm run test`                  | Run tests with `.env.test`                               |
| `npm run debug`                 | One-time run of TypeScript code directly (`ts-node src`) |
| `npm run lint`                  | Run ESLint                                               |
| `npm run format` / `format:fix` | Check and fix code formatting with Prettier              |

### Namespaced / extended scripts

| Script          | Purpose                              |
| --------------- | ------------------------------------ |
| `build:tsc`     | Compile with TypeScript              |
| `build:tsup`    | Bundle with tsup (cjs + esm + d.ts)  |
| `dev:nodemon`   | Development with nodemon             |
| `test:vitest`   | Run tests                            |
| `test:watch`    | Run tests in watch mode              |
| `test:coverage` | Run tests with coverage report       |
| `debug:ts`      | Run TypeScript directly with ts-node |
| `debug:tsx`     | Run TypeScript directly with tsx     |

> You can add new scripts (build:electron, start:cli) without changing existing ones.

## First Run

1. Start development with hot reload:

```bash
npm run dev
```

2. One-time run TypeScript (without building):

```bash
npm run debug
```

3. Build for production:

```bash
npm run build
```

4. Run production build:

```bash
npm run start
```

## Environment Configuration

Files:

- .env.development — local development
- .env.test — testing / CI
- .env.production — production

NODE_ENV determines which environment file is loaded.

Access variables in code via `process.env.VARIABLE_NAME.`

### Environment Switcher

Using dotenv-cli:

```bash
npm run dev # uses .env.development
npm run test # uses .env.test
npm run start # uses .env.production
```

You can add more environments (staging) without modifying existing scripts.

## Why This Structure

Boilerplate is project-type agnostic, usable for any Node.js project.

Scripts use namespaces for extensibility (`build:tsup`, `build:electron`).

`Dev`/`test`/`prod` separation via env files makes it CI/CD ready.

Supports both plain TypeScript compilation and bundling with tsup.

Strict TypeScript and ESLint settings enforce code quality from the start.
