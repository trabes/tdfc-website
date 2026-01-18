# TDFC Soccer Team Website

A static website built with React, TypeScript, and TanStack Router for a local soccer team.

## Project Structure

```
TDFCWebsite/
├── public/                     # Static assets
│   └── images/                 # Images (players, team, logos)
├── src/
│   ├── components/             # React components
│   │   ├── common/             # Common UI components (Header, Footer)
│   │   ├── player/             # Player-related components
│   │   ├── stats/              # Statistics components
│   │   └── news/               # News components
│   ├── pages/                  # Page components
│   │   ├── Home.tsx            # Home page with news
│   │   ├── About.tsx           # About us page
│   │   ├── Contact.tsx         # Contact page
│   │   ├── Players.tsx         # Player profiles
│   │   └── Stats.tsx           # Standings & statistics
│   ├── data/                   # Static JSON data
│   │   ├── players.json        # Player information
│   │   ├── news.json           # News items
│   │   ├── standings.json      # League standings
│   │   └── team-info.json      # Team information
│   ├── routes/                 # TanStack Router routes
│   ├── styles/                 # Global styles
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Utility functions
└── Configuration files
```

## Tech Stack

- **React 18**: UI library
- **TypeScript**: Type safety
- **TanStack Router**: File-based routing
- **Vite**: Build tool and dev server
- **CSS**: Vanilla CSS with CSS variables

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- **Home Page**: Latest news and upcoming events
- **About Page**: Team history and mission
- **Players Page**: Player profiles with stats
- **Stats Page**: League standings
- **Contact Page**: Contact information and social media links

## AI-Friendly Structure

This project is designed for easy AI collaboration:

- **Modular Components**: Small, focused files
- **Separated Data**: JSON files for easy updates
- **Clear Folder Structure**: Semantic organization
- **TypeScript**: Type safety and better AI understanding
- **Consistent Naming**: kebab-case for files, PascalCase for components
- **Path Aliases**: Clean imports using `@/` prefix

## Updating Content

### Adding News Items

Edit `src/data/news.json`:

```json
{
  "id": "news-4",
  "title": "Your News Title",
  "date": "2026-01-20",
  "content": "Your news content...",
  "category": "news"
}
```

### Adding Players

Edit `src/data/players.json`:

```json
{
  "id": "player-4",
  "name": "Player Name",
  "position": "Position",
  "jerseyNumber": 11,
  "bio": "Player bio...",
  "stats": {
    "gamesPlayed": 0,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0
  }
}
```

### Updating Team Info

Edit `src/data/team-info.json` to update team history, mission, and contact information.

### Updating Standings

Edit `src/data/standings.json` with current league standings.

## Development Tips

- Use path aliases: `@/components/*`, `@/data/*`, etc.
- TanStack Router auto-generates route tree from `src/routes/`
- All data is in JSON format for easy updates
- CSS variables defined in `src/styles/variables.css`
- TypeScript types defined in `src/types/index.ts`

## License

Private project for TDFC soccer team.
