// src/pages/api/heroes.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Hero } from '../types/hero';

const heroes: Hero[] = [
  { id: 'dva', name: 'D.Va', role: 'Tank', imageUrl: 'dva.ico' },
  { id: 'genji', name: 'Genji', role: 'Damage', imageUrl: 'genji.ico' },
  { id: 'ana', name: 'Ana', role: 'Support', imageUrl: 'ana.ico' },
  // Add more hero data here
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(heroes);
}
