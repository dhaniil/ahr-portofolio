import { getCollection, Collections } from './mongodb';
import type { Skill, Project, Certificate, Experience } from './mongodb';

// Skills CRUD
export const getSkills = async () => {
  const collection = await getCollection(Collections.SKILLS);
  return collection.find({}).toArray();
};

export const addSkill = async (skill: Omit<Skill, '_id'>) => {
  const collection = await getCollection(Collections.SKILLS);
  return collection.insertOne(skill);
};

// Projects CRUD
export const getProjects = async () => {
  const collection = await getCollection(Collections.PROJECTS);
  return collection.find({}).toArray();
};

export const addProject = async (project: Omit<Project, '_id'>) => {
  const collection = await getCollection(Collections.PROJECTS);
  return collection.insertOne(project);
};

// Certificates CRUD
export const getCertificates = async () => {
  const collection = await getCollection(Collections.CERTIFICATES);
  return collection.find({}).toArray();
};

export const addCertificate = async (certificate: Omit<Certificate, '_id'>) => {
  const collection = await getCollection(Collections.CERTIFICATES);
  return collection.insertOne(certificate);
};

// Experience CRUD
export const getExperience = async () => {
  const collection = await getCollection(Collections.EXPERIENCE);
  return collection.find({}).toArray();
};

export const addExperience = async (experience: Omit<Experience, '_id'>) => {
  const collection = await getCollection(Collections.EXPERIENCE);
  return collection.insertOne(experience);
};