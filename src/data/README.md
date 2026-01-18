# Data Structure Documentation

This directory contains all static data used throughout the website in JSON format.

## Files

### news.json
Contains news items, events, and registration announcements.

**Structure:**
```typescript
{
  id: string;           // Unique identifier
  title: string;        // News title
  date: string;         // Date in YYYY-MM-DD format
  content: string;      // News content/description
  category: 'news' | 'event' | 'registration';
  image?: string;       // Optional image path
}
```

### players.json
Contains player profiles and statistics.

**Structure:**
```typescript
{
  id: string;           // Unique identifier
  name: string;         // Player name
  position: string;     // Playing position
  jerseyNumber: number; // Jersey number
  photo?: string;       // Optional photo path
  bio?: string;         // Optional player bio
  stats?: {             // Optional statistics
    gamesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
  }
}
```

### standings.json
Contains league standings data.

**Structure:**
```typescript
{
  teamName: string;     // Team name
  gamesPlayed: number;  // Games played
  wins: number;         // Wins
  draws: number;        // Draws
  losses: number;       // Losses
  goalsFor: number;     // Goals scored
  goalsAgainst: number; // Goals conceded
  points: number;       // Total points (wins*3 + draws)
}
```

### team-info.json
Contains team information and contact details.

**Structure:**
```typescript
{
  name: string;         // Team name
  founded: string;      // Year founded
  history: string;      // Team history
  mission: string;      // Mission statement
  contact: {
    email: string;
    phone?: string;
    address?: string;
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    }
  }
}
```

## Updating Data

To update any content on the website, simply edit the corresponding JSON file. The changes will be reflected immediately after rebuilding the site.

**Example: Adding a new news item**

```json
{
  "id": "news-4",
  "title": "New Practice Schedule",
  "date": "2026-01-20",
  "content": "Updated practice times for the upcoming month.",
  "category": "event"
}
```

## Best Practices

- Use unique IDs for all items
- Keep dates in YYYY-MM-DD format
- Maintain consistent data structure
- Validate JSON before committing changes
- Use descriptive IDs (e.g., "player-1", "news-1")
