export interface Insight {
  platform: string;
  date: string;
  excerpt: string;
  author: string;
  href: string;
}

// Publish only client-approved posts. The section stays hidden until there
// are enough verified entries to avoid presenting an incomplete block.
export const insights: Insight[] = [];
export const MIN_INSIGHTS = 3;
export const MAX_INSIGHTS = 3;
