import { Request, Response } from 'express';
import { getProjects, addProject, updateProject, deleteProject } from '@/lib/server-db-utils';

export const GET = async (req: Request, res: Response) => {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const project = await addProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add project' });
  }
};

export const PUT = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await updateProject(id, req.body);
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteProject(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
};