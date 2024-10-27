// src/components/HeroGallery.tsx
"use client";

import React, { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard';
import axios from 'axios';
import { Hero } from '../types/hero';

function HeroGallery() {
    const [heroes, setHeroes] = useState<Hero[]>([]);

    useEffect(() => {
        axios.get('/api/heroes')
            .then((response) => {
                setHeroes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching heroes:", error);
            });
    }, []);

    const groupedHeroes = {
        Tank: heroes.filter(hero => hero.role === 'Tank'),
        Damage: heroes.filter(hero => hero.role === 'Damage'),
        Support: heroes.filter(hero => hero.role === 'Support'),
    };

    return (
        <div className="hero-gallery bg-midnight-blue p-4 rounded-lg">
            {Object.entries(groupedHeroes).map(([role, heroes]) => (
                <div key={role} className="mb-4">
                    <h2 className="text-xl font-semibold text-white mb-2">{role}</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {heroes.map(hero => (
                            <HeroCard key={hero.id} hero={hero} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HeroGallery;
