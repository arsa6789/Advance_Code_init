// src/types.ts
export interface LyricWord {
  text: string;
  startMs: number;
  endMs: number;
}

export interface LyricLine {
  text: string; // Fallback whole line
  startMs: number;
  endMs: number;
  words?: LyricWord[]; // Optional precise breakdown
}

export interface SongMetadata {
  title: string;
  artist: string;
  coverUrl: string;
  durationMs: number;
}