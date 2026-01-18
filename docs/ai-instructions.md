# AI Instructions for TDFC Website

This document contains guidelines and instructions for AI assistants working on this project.

## Project Overview

- **Type**: Static website for a soccer team
- **Stack**: React + TypeScript + TanStack Router + Vite
- **Purpose**: Team information, player profiles, news, standings, and contact info
- **Audience**: Team members, potential players, supporters

## Architecture Principles

### 1. Data-Driven Design
- All content is stored in JSON files in `src/data/`
- Components consume data via imports
- No hardcoded content in components
- Easy for non-technical updates

### 2. Component Structure
- Keep components small and focused (single responsibility)
- Use functional components with hooks
- Separate layout components (`common/`) from feature components
- One component per file

### 3. File Organization
```
components/
  common/     - Shared UI (Header, Footer, Button, etc.)
  player/     - Player-specific components
  stats/      - Statistics components
  news/       - News-related components
```

### 4. Naming Conventions
- **Files**: PascalCase for components (`PlayerCard.tsx`)
- **JSON**: kebab-case (`team-info.json`)
- **CSS classes**: kebab-case (`player-card`, `news-grid`)
- **Types**: PascalCase interfaces (`Player`, `NewsItem`)

### 5. Import Patterns
- Use path aliases: `@/components/*`, `@/data/*`, etc.
- Import types from `@/types`
- Import data files directly: `import players from '@/data/players.json'`

## Common Tasks

### Adding a New Page
1. Create page component in `src/pages/`
2. Create route file in `src/routes/` (e.g., `new-page.tsx`)
3. Add navigation link in `Header.tsx`
4. Update README if significant

### Adding Data
1. Edit appropriate JSON file in `src/data/`
2. Follow existing structure
3. Validate JSON syntax
4. Use unique IDs

### Creating a New Component
1. Place in appropriate subdirectory under `src/components/`
2. Import and use TypeScript types from `@/types`
3. Keep styles in `src/styles/index.css` or inline
4. Export as default

### Styling Guidelines
- Use CSS variables from `src/styles/variables.css`
- Follow existing class naming patterns
- Keep responsive design in mind (mobile-first)
- Test at different breakpoints

## TypeScript Guidelines

- Always define proper types (no `any`)
- Import shared types from `@/types`
- Use interfaces for object shapes
- Add JSDoc comments for complex functions

## Git Workflow

- Branch: `main`
- Commit messages: Clear, descriptive, imperative mood
- Keep commits atomic and focused
- Update relevant docs with code changes

## Testing Changes

```bash
# Development
npm run dev

# Build check
npm run build

# Lint check
npm run lint
```

## Content Update Frequency

- **News**: Weekly or as events occur
- **Players**: Start of season, or when roster changes
- **Standings**: After each match
- **Team Info**: Rarely (only major changes)

## AI Assistant Reminders

1. **Always read existing code** before making changes
2. **Follow established patterns** in the codebase
3. **Update JSON data files** rather than hardcoding content
4. **Test imports** - verify path aliases work
5. **Consider mobile** - responsive design is important
6. **Keep it simple** - static site, no over-engineering
7. **Document major changes** in commit messages
8. **Preserve existing structure** unless refactoring is requested

## Future Considerations

- Potential features to discuss:
  - Photo gallery
  - Match schedule/calendar
  - Online registration form
  - Admin dashboard for easier updates
  - Blog/news with individual post pages
  - Player search/filter functionality

## Helpful Context

- Site owner is a software developer
- Content updates will be manual (editing JSON)
- No backend or CMS planned for now
- Focus on simplicity and maintainability
- AI collaboration is expected and encouraged
