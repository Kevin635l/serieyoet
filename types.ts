export interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string; // Path to MP4
  duration: string;
}

export interface NavLink {
  label: string;
  path: string;
}