export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export interface Student {
  name: string;
  month: string;
  year: number;
  bio: string;
  achievement: string;
  github?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  author: string;
  github?: string;
  demo?: string;
}
