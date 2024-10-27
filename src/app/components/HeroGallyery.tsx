// src/components/HeroGallery.tsx
import React from "react";
import HeroCard from "./HeroCard";
import { Hero } from "../types/hero";

interface HeroGalleryProps {
  heroes: Hero[]; // Define the heroes prop as an array of Hero objects
}

const HeroGallery: React.FC<HeroGalleryProps> = ({ heroes }) => {
  const groupedHeroes = {
    Tank: heroes.filter((hero) => hero.role === "Tank"),
    Damage: heroes.filter((hero) => hero.role === "Damage"),
    Support: heroes.filter((hero) => hero.role === "Support"),
  };

  return (
    <div className="p-4 space-y-8">
      {Object.entries(groupedHeroes).map(([role, heroes]) => (
        <div key={role}>
          <h2 className="text-2xl font-semibold text-white mb-4">{role}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroGallery;
