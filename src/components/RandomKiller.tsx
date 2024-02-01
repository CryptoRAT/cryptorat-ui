import React from "react";
import '../css/RandomKiller.css';

interface Killer {
    id: number;
    name: string;
    image_path: string;
}

interface Perk {
    id: number;
    name: string;
    type: string;
    owner: string;
    image_path: string;
}

interface RandomKillerProps {
    killer: Killer;
    perks: Perk[];
}

const RandomKiller: React.FC<RandomKillerProps> = ({killer, perks}) => {
    console.log("Received Killer Props:", killer);
    console.log("Received Perks Props:", perks);
    return (
        <>
            <div className="card p-3 RandomKillerNameAndImage">
                <div>Killer: {killer.name}</div>
                <div>
                    <img className="profile-photo" src={`../${killer.image_path}`} alt={killer.name} />
                </div>

            </div>
            <div className="card p-3 RandomPerksList">
                {perks.map((perk, index) => (
                    <div className="randomPerk" key={index}>
                        <div>
                            <img className="profile-photo" src={`../${perk.image_path}`} alt={perk.name} />
                        </div>
                        <div className="randomPerkName">
                            {perk.name}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RandomKiller;
