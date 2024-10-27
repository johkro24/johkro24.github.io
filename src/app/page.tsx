// src/app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import HeroGallery from "../components/HeroGallery";
import { Hero } from "../types/hero";

export default function Home() {
    const [heroes, setHeroes] = useState<Hero[]>([]);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await fetch("/api/heroes");
                const data = await response.json();
                setHeroes(data);
            } catch (error) {
                console.error("Error fetching hero data:", error);
            }
        };
        fetchHeroes();
    }, []);

    return (
        <div className="min-h-screen bg-midnight-blue flex items-center justify-center p-6">
            <HeroGallery heroes={heroes} />
        </div>
    );
}
