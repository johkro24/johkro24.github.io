// src/app/api/heroes/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const heroes = [
        // Tanks
        { id: '1', name: 'D.Va', role: 'Tank' },
        { id: '2', name: 'Doomfist', role: 'Tank' },
        { id: '3', name: 'Junker Queen', role: 'Tank' },
        { id: '4', name: 'Mauga', role: 'Tank' },
        { id: '5', name: 'Orisa', role: 'Tank' },
        { id: '6', name: 'Ramattra', role: 'Tank' },
        { id: '7', name: 'Reinhardt', role: 'Tank' },
        { id: '8', name: 'Roadhog', role: 'Tank' },
        { id: '9', name: 'Sigma', role: 'Tank' },
        { id: '10', name: 'Winston', role: 'Tank' },
        { id: '11', name: 'Wrecking Ball', role: 'Tank' },
        { id: '12', name: 'Zarya', role: 'Tank' },

        // Damage
        { id: '13', name: 'Ashe', role: 'Damage' },
        { id: '14', name: 'Bastion', role: 'Damage' },
        { id: '15', name: 'Cassidy', role: 'Damage' },
        { id: '16', name: 'Echo', role: 'Damage' },
        { id: '17', name: 'Genji', role: 'Damage' },
        { id: '18', name: 'Hanzo', role: 'Damage' },
        { id: '19', name: 'Junkrat', role: 'Damage' },
        { id: '20', name: 'Mei', role: 'Damage' },
        { id: '21', name: 'Pharah', role: 'Damage' },
        { id: '22', name: 'Reaper', role: 'Damage' },
        { id: '23', name: 'Sojourn', role: 'Damage' },
        { id: '24', name: 'Soldier: 76', role: 'Damage' },
        { id: '25', name: 'Sombra', role: 'Damage' },
        { id: '26', name: 'Symmetra', role: 'Damage' },
        { id: '27', name: 'Torbjörn', role: 'Damage' },
        { id: '28', name: 'Tracer', role: 'Damage' },
        { id: '29', name: 'Venture', role: 'Damage' }, // Assuming "Venture" is intended as a placeholder
        { id: '30', name: 'Widowmaker', role: 'Damage' },

        // Support
        { id: '31', name: 'Ana', role: 'Support' },
        { id: '32', name: 'Baptiste', role: 'Support' },
        { id: '33', name: 'Brigitte', role: 'Support' },
        { id: '34', name: 'Illari', role: 'Support' },
        { id: '35', name: 'Juno', role: 'Support' },   // Assuming "Juno" is a placeholder
        { id: '36', name: 'Kiriko', role: 'Support' },
        { id: '37', name: 'Lifeweaver', role: 'Support' },
        { id: '38', name: 'Lúcio', role: 'Support' },
        { id: '39', name: 'Mercy', role: 'Support' },
        { id: '40', name: 'Moira', role: 'Support' },
        { id: '41', name: 'Zenyatta', role: 'Support' },
    ];
    
    return NextResponse.json(heroes);
}
