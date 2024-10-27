// types/hero.d.ts
export interface Hero {
  id: string;
  name: string;
  role: 'Tank' | 'Damage' | 'Support';
  imageUrl: string;
}
