// Types for our collections
export interface Skill {
  _id?: string;
  name: string;
  level: number;
}

export interface Project {
  _id?: string;
  title: string;
  description: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
}

export interface Certificate {
  _id?: string;
  title: string;
  issuer: string;
  date: string;
}

export interface Experience {
  _id?: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
}

// Collection names as constants
export const Collections = {
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CERTIFICATES: 'certificates',
  EXPERIENCE: 'experience'
} as const;