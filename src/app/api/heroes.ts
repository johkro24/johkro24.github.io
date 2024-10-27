// src/pages/api/heroes.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Hero } from '../types/hero';

const heroes: Hero[] = [
  { id: 'dva', name: 'D.Va', role: 'Tank', image: 'dva.png' },
  { id: 'genji', name: 'Genji', role: 'Damage', image: 'genji.png' },
  { id: 'ana', name: 'Ana', role: 'Support', image: 'ana.png' },
  // Add more hero data here
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(heroes);
}
