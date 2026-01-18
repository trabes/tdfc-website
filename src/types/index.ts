// Type definitions for the TDFC website

export interface Player {
  id: string;
  name: string;
  position: string;
  jerseyNumber: number;
  photo?: string;
  bio?: string;
  stats?: PlayerStats;
}

export interface PlayerStats {
  gamesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  category: 'news' | 'event' | 'registration';
}

export interface TeamStandings {
  teamName: string;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface TeamInfo {
  name: string;
  founded: string;
  history: string;
  mission: string;
  contact: ContactInfo;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}
