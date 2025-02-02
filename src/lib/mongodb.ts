export interface Project {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
  technologies: string[];
}

export interface Certificate {
  _id?: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  verificationUrl: string;
}

export interface Education {
  _id?: string;
  degree: string;
  field: string;
  institution: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export const MONGODB_DB = process.env.MONGODB_DB || 'portfolio';
export const COLLECTIONS = {
  PROJECTS: 'projects',
  CERTIFICATES: 'certificates',
  EDUCATION: 'education'
} as const;