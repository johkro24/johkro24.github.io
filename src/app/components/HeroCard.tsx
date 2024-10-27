// src/components/HeroCard.tsx
import React from "react";
import { Hero } from "../types/hero";

interface HeroCardProps {
    hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center">
            <img
                src={`public/Hero-images/${hero.id}.ico`}
                alt={hero.name}
                className="w-20 h-20 rounded-full mb-2"
            />
            <h3 className="text-lg font-medium">{hero.name}</h3>
        </div>
    );
};

export default HeroCard;
