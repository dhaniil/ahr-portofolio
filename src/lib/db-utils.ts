import { ObjectId } from 'mongodb';
import clientPromise from './mongodb-client';
import { Project, Certificate, Education, MONGODB_DB, COLLECTIONS } from './mongodb';

// Projects CRUD
export const getProjects = async (): Promise<Project[]> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.PROJECTS);
  const projects = await collection.find({}).toArray();
  return projects.map(project => ({
    ...project,
    _id: project._id.toString()
  }));
};

export const addProject = async (project: Omit<Project, '_id'>): Promise<Project> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.PROJECTS);
  const result = await collection.insertOne(project);
  return {
    ...project,
    _id: result.insertedId.toString()
  };
};

export const updateProject = async (id: string, project: Omit<Project, '_id'>): Promise<Project> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.PROJECTS);
  await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: project }
  );
  return {
    ...project,
    _id: id
  };
};

export const deleteProject = async (id: string): Promise<void> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.PROJECTS);
  await collection.deleteOne({ _id: new ObjectId(id) });
};

// Certificates CRUD
export const getCertificates = async (): Promise<Certificate[]> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.CERTIFICATES);
  const certificates = await collection.find({}).toArray();
  return certificates.map(certificate => ({
    ...certificate,
    _id: certificate._id.toString()
  }));
};

export const addCertificate = async (certificate: Omit<Certificate, '_id'>): Promise<Certificate> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.CERTIFICATES);
  const result = await collection.insertOne(certificate);
  return {
    ...certificate,
    _id: result.insertedId.toString()
  };
};

export const updateCertificate = async (id: string, certificate: Omit<Certificate, '_id'>): Promise<Certificate> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.CERTIFICATES);
  await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: certificate }
  );
  return {
    ...certificate,
    _id: id
  };
};

export const deleteCertificate = async (id: string): Promise<void> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.CERTIFICATES);
  await collection.deleteOne({ _id: new ObjectId(id) });
};

// Education CRUD
export const getEducation = async (): Promise<Education[]> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.EDUCATION);
  const education = await collection.find({}).toArray();
  return education.map(edu => ({
    ...edu,
    _id: edu._id.toString()
  }));
};

export const addEducation = async (education: Omit<Education, '_id'>): Promise<Education> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.EDUCATION);
  const result = await collection.insertOne(education);
  return {
    ...education,
    _id: result.insertedId.toString()
  };
};

export const updateEducation = async (id: string, education: Omit<Education, '_id'>): Promise<Education> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.EDUCATION);
  await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: education }
  );
  return {
    ...education,
    _id: id
  };
};

export const deleteEducation = async (id: string): Promise<void> => {
  const client = await clientPromise;
  const collection = client.db(MONGODB_DB).collection(COLLECTIONS.EDUCATION);
  await collection.deleteOne({ _id: new ObjectId(id) });
};