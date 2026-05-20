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
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  author: string;
  github?: string;
  demo?: string;
  tag?: string;
  featured?: boolean;
}

export interface Portfolio {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  specialties: string[];
  url: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}
