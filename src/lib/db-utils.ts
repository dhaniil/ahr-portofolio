import type { Skill, Project, Certificate, Education } from './mongodb';

// Mock data
const mockProjects: Project[] = [
  {
    _id: '1',
    title: 'Sample Project 1',
    description: 'A sample project description',
    technologies: ['React', 'TypeScript'],
    imageUrl: '/placeholder.svg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

const mockCertificates: Certificate[] = [
  {
    _id: '1',
    title: 'Sample Certificate',
    issuer: 'Sample Institution',
    date: '2024-01',
    imageUrl: '/placeholder.svg',
    verificationUrl: 'https://example.com'
  }
];

const mockEducation: Education[] = [
  {
    _id: '1',
    institution: 'Sample University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2020-09',
    endDate: '2024-06',
    description: 'Sample education description'
  }
];

// Projects CRUD
export const getProjects = async (): Promise<Project[]> => {
  return Promise.resolve(mockProjects);
};

export const addProject = async (project: Omit<Project, '_id'>): Promise<Project> => {
  const newProject = {
    _id: Date.now().toString(),
    ...project
  };
  mockProjects.push(newProject);
  return Promise.resolve(newProject);
};

export const updateProject = async (id: string, project: Omit<Project, '_id'>): Promise<Project> => {
  const index = mockProjects.findIndex(p => p._id === id);
  if (index === -1) throw new Error('Project not found');
  
  const updatedProject = { _id: id, ...project };
  mockProjects[index] = updatedProject;
  return Promise.resolve(updatedProject);
};

export const deleteProject = async (id: string): Promise<void> => {
  const index = mockProjects.findIndex(p => p._id === id);
  if (index === -1) throw new Error('Project not found');
  
  mockProjects.splice(index, 1);
  return Promise.resolve();
};

// Certificates CRUD
export const getCertificates = async (): Promise<Certificate[]> => {
  return Promise.resolve(mockCertificates);
};

export const addCertificate = async (certificate: Omit<Certificate, '_id'>): Promise<Certificate> => {
  const newCertificate = {
    _id: Date.now().toString(),
    ...certificate
  };
  mockCertificates.push(newCertificate);
  return Promise.resolve(newCertificate);
};

export const updateCertificate = async (id: string, certificate: Omit<Certificate, '_id'>): Promise<Certificate> => {
  const index = mockCertificates.findIndex(c => c._id === id);
  if (index === -1) throw new Error('Certificate not found');
  
  const updatedCertificate = { _id: id, ...certificate };
  mockCertificates[index] = updatedCertificate;
  return Promise.resolve(updatedCertificate);
};

export const deleteCertificate = async (id: string): Promise<void> => {
  const index = mockCertificates.findIndex(c => c._id === id);
  if (index === -1) throw new Error('Certificate not found');
  
  mockCertificates.splice(index, 1);
  return Promise.resolve();
};

// Education CRUD
export const getEducation = async (): Promise<Education[]> => {
  return Promise.resolve(mockEducation);
};

export const addEducation = async (education: Omit<Education, '_id'>): Promise<Education> => {
  const newEducation = {
    _id: Date.now().toString(),
    ...education
  };
  mockEducation.push(newEducation);
  return Promise.resolve(newEducation);
};

export const updateEducation = async (id: string, education: Omit<Education, '_id'>): Promise<Education> => {
  const index = mockEducation.findIndex(e => e._id === id);
  if (index === -1) throw new Error('Education not found');
  
  const updatedEducation = { _id: id, ...education };
  mockEducation[index] = updatedEducation;
  return Promise.resolve(updatedEducation);
};

export const deleteEducation = async (id: string): Promise<void> => {
  const index = mockEducation.findIndex(e => e._id === id);
  if (index === -1) throw new Error('Education not found');
  
  mockEducation.splice(index, 1);
  return Promise.resolve();
};