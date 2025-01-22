import { Request, Response } from 'express';
import { getCertificates, addCertificate, updateCertificate, deleteCertificate } from '@/lib/server-db-utils';

export const GET = async (req: Request, res: Response) => {
  try {
    const certificates = await getCertificates();
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch certificates' });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const certificate = await addCertificate(req.body);
    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add certificate' });
  }
};

export const PUT = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const certificate = await updateCertificate(id, req.body);
    res.json(certificate);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update certificate' });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCertificate(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete certificate' });
  }
};