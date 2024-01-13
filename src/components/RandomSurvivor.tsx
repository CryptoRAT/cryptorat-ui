import React from "react";
import '../css/RandomPerksList.css';

interface Survivor {
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

interface RandomSurvivorProps {
    survivor: Survivor;
    perks: Perk[];
}

const RandomSurvivor: React.FC<RandomSurvivorProps> = ({survivor, perks}) => {
    console.log("Received Survivor Props:", survivor);
    console.log("Received Perks Props:", perks);
    return (
        <>
            <div className="card p-3 RandomSurivorNameAndImage">
                <div>Survivor: {survivor.name}</div>
                <div>
                    <img className="profile-photo" src={survivor.image_path} alt={survivor.name} />
                </div>

            </div>
            <div className="card p-3 RandomPerksList">
                {perks.map((perk, index) => (
                    <div className="randomPerk" key={index}>
                        <div>
                            <img className="profile-photo" src={perk.image_path} alt={perk.name} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RandomSurvivor;
