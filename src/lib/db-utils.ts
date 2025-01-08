import type { Skill, Project, Certificate, Education } from './mongodb';

const API_URL = import.meta.env.VITE_API_URL || '/api';

// Skills CRUD
export const getSkills = async () => {
  const response = await fetch(`${API_URL}/skills`);
  if (!response.ok) throw new Error('Failed to fetch skills');
  return response.json();
};

export const addSkill = async (skill: Omit<Skill, '_id'>) => {
  const response = await fetch(`${API_URL}/skills`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(skill),
  });
  if (!response.ok) throw new Error('Failed to add skill');
  return response.json();
};

// Projects CRUD
export const getProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
};

export const addProject = async (project: Omit<Project, '_id'>) => {
  const response = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  });
  if (!response.ok) throw new Error('Failed to add project');
  return response.json();
};

export const updateProject = async (id: string, project: Omit<Project, '_id'>) => {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  });
  if (!response.ok) throw new Error('Failed to update project');
  return response.json();
};

export const deleteProject = async (id: string) => {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete project');
  return response.json();
};

// Certificates CRUD
export const getCertificates = async () => {
  const response = await fetch(`${API_URL}/certificates`);
  if (!response.ok) throw new Error('Failed to fetch certificates');
  return response.json();
};

export const addCertificate = async (certificate: Omit<Certificate, '_id'>) => {
  const response = await fetch(`${API_URL}/certificates`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(certificate),
  });
  if (!response.ok) throw new Error('Failed to add certificate');
  return response.json();
};

export const updateCertificate = async (id: string, certificate: Omit<Certificate, '_id'>) => {
  const response = await fetch(`${API_URL}/certificates/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(certificate),
  });
  if (!response.ok) throw new Error('Failed to update certificate');
  return response.json();
};

export const deleteCertificate = async (id: string) => {
  const response = await fetch(`${API_URL}/certificates/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete certificate');
  return response.json();
};

// Education CRUD
export const getEducation = async () => {
  const response = await fetch(`${API_URL}/education`);
  if (!response.ok) throw new Error('Failed to fetch education');
  return response.json();
};

export const addEducation = async (education: Omit<Education, '_id'>) => {
  const response = await fetch(`${API_URL}/education`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(education),
  });
  if (!response.ok) throw new Error('Failed to add education');
  return response.json();
};

export const updateEducation = async (id: string, education: Omit<Education, '_id'>) => {
  const response = await fetch(`${API_URL}/education/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(education),
  });
  if (!response.ok) throw new Error('Failed to update education');
  return response.json();
};

export const deleteEducation = async (id: string) => {
  const response = await fetch(`${API_URL}/education/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete education');
  return response.json();
};