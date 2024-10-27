// src/components/HeroCard.tsx
import React from 'react';
import { Hero } from '../types/hero';

interface HeroCardProps {
    hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
    return (
        <div className="hero-card p-2 bg-gray-800 text-white rounded-md">
            <h3>{hero.name}</h3>
            <p>{hero.role}</p>
        </div>
    );
};

export default HeroCard;
