# Agent Guidelines for wutachi-portifolio

**Framework**: Astro v5+ with TypeScript (strict) | **Package Manager**: pnpm | **Architecture**: Atomic Design + SOLID + TDD

## Commands
- **Dev**: `pnpm dev`
- **Build**: `pnpm build`
- **Test all**: `pnpm test`
- **Test single**: `pnpm test Button.test.ts` (run specific test file)
- **Lint**: `pnpm lint`
- **Format**: `pnpm format`
- **Type check**: `pnpm typecheck`

## Code Style Guidelines
- **Imports**: Group by external libs, then internal (atoms/molecules/organisms), then utils. Use absolute paths.
- **Formatting**: Prettier with single quotes, no semicolons, 2-space tabs, 80 char width.
- **Types**: Strict TypeScript. Never use `any` - use `unknown` or specific unions. Interfaces over types.
- **Naming**: PascalCase for components, camelCase for props/functions, kebab-case for CSS classes.
- **Error Handling**: Use try/catch in async functions, throw descriptive errors.
- **Components**: One responsibility per component. Props optional for extension. Dependency injection via props.
- **Testing**: 100% coverage required. Test behavior not implementation. Use `@testing-library/astro`.

## Architecture Rules
- **Atomic Design**: atoms (no business logic) → molecules (simple logic) → organisms (state/API calls)
- **TDD Required**: Write failing test first, then minimal implementation, then refactor.
- **SOLID**: Single responsibility, Open for extension, Liskov substitution, Interface segregation, Dependency injection.

## File Structure
```
src/components/
├── atoms/     → Basic UI elements
├── molecules/ → Composed atoms
└── organisms/ → Complex components with state
src/tests/     → Mirror component structure
```
