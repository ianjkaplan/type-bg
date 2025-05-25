# OpenCode Configuration

## Commands
- **Build**: `pnpm build` (production) or `pnpm dev` (watch mode)
- **Test**: `pnpm test` (all tests) or `vitest run <pattern>` (single test/pattern)
- **Lint**: `pnpm lint` (ESLint check) or `pnpm format` (Prettier format)
- **Package manager**: Uses `pnpm` for dependency management

## Code Style
- **Module system**: ES modules (`type: "module"` in package.json)
- **TypeScript**: Strict mode enabled, use explicit return types for functions
- **Imports**: Use named exports, relative imports with file extensions for local files
- **Naming**: camelCase for functions/variables, PascalCase for types/interfaces
- **Functions**: Prefer arrow functions for simple expressions, explicit return types
- **Testing**: Vitest framework, test files in `tests/` directory with `.test.ts` suffix
- **Dependencies**: Kysely for database queries, pg for PostgreSQL connection
- **Build**: Uses rslib for library bundling, outputs to `dist/` directory
- **Formatting**: Prettier for code formatting, ESLint with TypeScript rules
- **Target**: ES2021, bundler module resolution, strict TypeScript configuration