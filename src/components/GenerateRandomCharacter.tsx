import RandomSurvivor from "./RandomSurvivor";
import RandomKiller from "./RandomKiller";
import React, {useState} from "react";
import axios from "axios";
import '../css/GenerateRandomCharacter.css';

interface Survivor {
    id: number;
    name: string;
    image_path: string;
}

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

const GenerateRandomCharacter = () => {

    const [randomSurvivor, setRandomSurvivor] = useState<Survivor>({
        id: 1,
        name: "Ace Visconti",
        image_path: "static/survivors/ace_visconti.jpg",
    });
    const [randomSurvivorPerks, setRandomSurvivorPerks] = useState<Perk[]>([
        {
            "id": 1,
            "name": "Ace in the Hole",
            "type": "Survivor",
            "owner": "Ace Visconti",
            "image_path": "static/perks/ace_in_the_hole.webp"
        },
        {
            "id": 2,
            "name": "Plunderers Instinct",
            "type": "Survivor",
            "owner": "Common",
            "image_path": "static/perks/plunderers_instinct.webp"
        },
        {
            "id": 3,
            "name": "Windows of Opportunity",
            "type": "Survivor",
            "owner": "Kate Denson",
            "image_path": "static/perks/windows_of_opportunity.webp"
        },
        {
            "id": 4,
            "name": "Bond",
            "type": "Survivor",
            "owner": "Dwight Fairfield",
            "image_path": "static/perks/bond.webp"
        },
    ]);
    const KILLER = 0;
    const SURVIVOR = 1;
    const [current, setCurrent] = useState(SURVIVOR);

    const [randomKiller, setRandomKiller] = useState<Killer>({
        id: 1,
        name: "The Pig",
        image_path: "static/killers/the_pig.jpg",
    });

    const [randomKillerPerks, setRandomKillerPerks] = useState<Perk[]>([
        {
            "id": 1,
            "name": "Nowhere to Hide",
            "type": "Killer",
            "owner": "The Knight",
            "image_path": "static/perks/nowhere_to_hide.webp"
        },
        {
            "id": 2,
            "name": "Whispers",
            "type": "Killer",
            "owner": "Common",
            "image_path": "static/perks/whispers.webp"
        },
        {
            "id": 3,
            "name": "Hex: Plaything",
            "type": "Killer",
            "owner": "The Cenobite",
            "image_path": "static/perks/hex_plaything.webp"
        },
        {
            "id": 4,
            "name": "Hex: Pentimento",
            "type": "Killer",
            "owner": "The Artist",
            "image_path": "static/perks/hex_pentimento.webp"
        },
    ]);

    const renderGenerateRandomButtons = () => {
        console.log("Entering renderGenerateRandomButtons");
        return (
            <div className="buttons">
                <div>
                    <button className="btn btn-primary surivor-button" onClick={() => calculateRandom(SURVIVOR)}>
                        Survivor Build
                    </button>
                    <button className="btn btn-primary killer-button" onClick={() => calculateRandom(KILLER)}>
                        Killer Build
                    </button>
                </div>
            </div>

        );
    };

    const calculateRandom = (type: number) => {
        console.log("Entering calculateRandom");
        console.log("Type: " + type);
        setCurrent(type);
        if (type === KILLER) {
            getRandomKiller();
            getRandomKillerPerks();
        } else {
            getRandomSurvivor();
            getRandomSurvivorPerks();
        }

        console.log("Leaving calculateRandom");
    };

    const getRandomKiller = () => {
        console.log("Entering getRandomKiller");
        // Get a random survivor
        console.log("service url: " + process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL);
        axios
            .post(
                process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + "api/killer/random/",
                // Data to be sent in the request body, if any (optional)
                {action: 'random'},
                // Config object with additional options
                {
                    headers: {
                        'Content-Type': 'application/json', // Make sure to set the appropriate content type
                    },
                    params: {
                        // Custom parameters if needed
                    },
                }
            )
            .then((res) => {
                console.log("Inside then block in post to killer/random/");
                const killerData = Array.isArray(res.data) ? res.data[0] : res.data;
                setRandomKiller(killerData);
                console.log("Updated State with Killer Data:", killerData);
                console.log("Leaving getRandomKiller");
            })
            .catch((err) => console.log(err));
    };

    const getRandomKillerPerks = () => {
        console.log("Entering getRandomKillerPerks");
        // Get random survivor perks
        axios
            .post(process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + "api/perk/killer/random/")
            .then((res) => {
                console.log("Inside then block");
                setRandomKillerPerks(res.data);
                console.log("LUKE:" + JSON.stringify(res.data));
                console.log("Leaving getRandomKillerPerks");
            })
            .catch((err) => console.log(err));
    };

    const getRandomSurvivor = () => {
        console.log("Entering getRandomSurvivor");
        // Get a random survivor
        console.log("service url: " + process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL);
        axios
            .post(
                process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + "api/survivor/random/",
                // Data to be sent in the request body, if any (optional)
                {action: 'random'},
                // Config object with additional options
                {
                    headers: {
                        'Content-Type': 'application/json', // Make sure to set the appropriate content type
                    },
                    params: {
                        // Custom parameters if needed
                    },
                }
            )
            .then((res) => {
                console.log("Inside then block");
                const survivorData = Array.isArray(res.data) ? res.data[0] : res.data;
                setRandomSurvivor(survivorData);
                console.log("Updated State with Survivor Data:", survivorData);
                console.log("Leaving getRandomSurvivor");
            })
            .catch((err) => console.log(err));
    };


    const getRandomSurvivorPerks = () => {
        console.log("Entering getRandomSurvivorPerks");
        // Get random survivor perks
        axios
            .post(process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + "api/perk/survivor/random/")
            .then((res) => {
                console.log("Inside then block");
                setRandomSurvivorPerks(res.data);
                console.log("LUKE:" + JSON.stringify(res.data));
                console.log("Leaving getRandomSurvivorPerks");
            })
            .catch((err) => console.log(err));
    };


    return (
        <main className="container">
            <div className="row">
                <div className="col-md-6 col-sm-10 mx-auto p-0">
                    <div className="card p-3">
                        <div className="mb-4">{renderGenerateRandomButtons()}</div>
                        {current === KILLER ? (
                            <RandomKiller killer={randomKiller} perks={randomKillerPerks}/>
                        ) : (
                            <RandomSurvivor survivor={randomSurvivor} perks={randomSurvivorPerks}/>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default GenerateRandomCharacter;
