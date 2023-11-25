// RandomSurvivor.js
import React from "react";
import './css/RandomPerksList.css';

const RandomSurvivor = ({ survivor, perks }) => {
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
                    <div className="randomPerk" key={index} item={perk.name}>
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
