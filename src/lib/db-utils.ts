import type { Skill, Project, Certificate, Experience } from './mongodb';

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

// Experience CRUD
export const getExperience = async () => {
  const response = await fetch(`${API_URL}/experience`);
  if (!response.ok) throw new Error('Failed to fetch experience');
  return response.json();
};

export const addExperience = async (experience: Omit<Experience, '_id'>) => {
  const response = await fetch(`${API_URL}/experience`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(experience),
  });
  if (!response.ok) throw new Error('Failed to add experience');
  return response.json();
};