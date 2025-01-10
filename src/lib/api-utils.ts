import { Project, Certificate, Education } from './mongodb';

const API_BASE_URL = '/api';

// Projects CRUD
export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${API_BASE_URL}/projects`);
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
};

export const addProject = async (project: Omit<Project, '_id'>): Promise<Project> => {
  const response = await fetch(`${API_BASE_URL}/projects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  });
  if (!response.ok) throw new Error('Failed to add project');
  return response.json();
};

export const updateProject = async (id: string, project: Omit<Project, '_id'>): Promise<Project> => {
  const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  });
  if (!response.ok) throw new Error('Failed to update project');
  return response.json();
};

export const deleteProject = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete project');
};

// Certificates CRUD
export const getCertificates = async (): Promise<Certificate[]> => {
  const response = await fetch(`${API_BASE_URL}/certificates`);
  if (!response.ok) throw new Error('Failed to fetch certificates');
  return response.json();
};

export const addCertificate = async (certificate: Omit<Certificate, '_id'>): Promise<Certificate> => {
  const response = await fetch(`${API_BASE_URL}/certificates`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(certificate),
  });
  if (!response.ok) throw new Error('Failed to add certificate');
  return response.json();
};

export const updateCertificate = async (id: string, certificate: Omit<Certificate, '_id'>): Promise<Certificate> => {
  const response = await fetch(`${API_BASE_URL}/certificates/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(certificate),
  });
  if (!response.ok) throw new Error('Failed to update certificate');
  return response.json();
};

export const deleteCertificate = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/certificates/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete certificate');
};

// Education CRUD
export const getEducation = async (): Promise<Education[]> => {
  const response = await fetch(`${API_BASE_URL}/education`);
  if (!response.ok) throw new Error('Failed to fetch education');
  return response.json();
};

export const addEducation = async (education: Omit<Education, '_id'>): Promise<Education> => {
  const response = await fetch(`${API_BASE_URL}/education`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(education),
  });
  if (!response.ok) throw new Error('Failed to add education');
  return response.json();
};

export const updateEducation = async (id: string, education: Omit<Education, '_id'>): Promise<Education> => {
  const response = await fetch(`${API_BASE_URL}/education/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(education),
  });
  if (!response.ok) throw new Error('Failed to update education');
  return response.json();
};

export const deleteEducation = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/education/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete education');
};