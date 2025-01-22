import { Request, Response } from 'express';
import { getEducation, addEducation, updateEducation, deleteEducation } from '@/lib/server-db-utils';

export const GET = async (req: Request, res: Response) => {
  try {
    const education = await getEducation();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch education' });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const educationItem = await addEducation(req.body);
    res.status(201).json(educationItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add education' });
  }
};

export const PUT = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const educationItem = await updateEducation(id, req.body);
    res.json(educationItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update education' });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteEducation(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete education' });
  }
};