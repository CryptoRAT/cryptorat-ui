import React, {Component} from "react";
import axios from "axios";
import "./App.css";
import RandomSurvivor from "./RandomSurvivor";

const defaultRandomSurvivor =
    {
        id: 1,
        name: "Ace Visconti",
        image_path: "static/survivors/ace_visconti.jpg",
    };


const defaultSurvivorsRandomPerkList = [
    {
        "id": 1,
        "name": "Ace in the Hole",
        "type": "Survivor",
        "owner": "Ace Visconti",
        "image_path": "static/perks/ace_in_the_hole.webp"
    },
    {
        "id": 2,
        "name": "Open-Handed",
        "type": "Survivor",
        "owner": "Ace Visconti",
        "image_path": "static/perks/open_handed.webp"
    },
    {
        "id": 3,
        "name": "Up the Ante",
        "type": "Survivor",
        "owner": "Ace Visconti",
        "image_path": "static/perks/up_the_ante.webp"
    },
    {
        "id": 4,
        "name": "Bond",
        "type": "Survivor",
        "owner": "Dwight Fairfield",
        "image_path": "static/perks/bond.webp"
    },
]
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomSurvivor: defaultRandomSurvivor,
            randomSurvivorPerks: defaultSurvivorsRandomPerkList,
        };
    }

    componentDidMount() {
        console.log("Entering componentDidMount");
        this.loadInitialRandomData();
        console.log("Leaving componentDidMount");
    }

    loadInitialRandomData = () => {
        console.log("Entering loadInitialRandomData");
        this.calculateRandom(true);
        console.log("Leaving loadInitialRandomData");
    };

    calculateRandom = (status) => {
        console.log("Entering calculateRandom");
        if (status) {
            this.getRandomSurvivor();
            this.getRandomSurvivorPerks();
        }
        console.log("Leaving calculateRandom");
        return this.setState({ randomCalculated: status });
    };

    renderGenerateRandomButton = () => {
        console.log("Entering renderGenerateRandomButton");
        return (
            <div>
                <button className="btn btn-primary" onClick={() => {
                    this.calculateRandom(true);
                }}>
                    Generate Random Survivor Build
                </button>
            </div>
        );
    };

    render() {
        return (
            <main className="container">
                <h1 className="text-white text-uppercase text-center my-4">Dead by Daylight Build Randomizer App</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <div className="mb-4">
                                {this.renderGenerateRandomButton()}
                            </div>
                            <RandomSurvivor
                                survivor={this.state.randomSurvivor}
                                perks={this.state.randomSurvivorPerks}
                            />
                        </div>
                    </div>
                </div>
            </main>
        );
    }


    getRandomSurvivor() {
        console.log("Entering getRandomSurvivor");
        // Get a random survivor
        axios
            .get(process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + "api/survivor/random")
            .then((res) => {
                const survivorData = Array.isArray(res.data) ? res.data[0] : res.data;
                this.setState((prevState) => {
                    return { randomSurvivor: survivorData };
                }, () => {
                    console.log("Updated State with Survivor Data:", this.state.randomSurvivor);
                    console.log("Leaving getRandomSurvivor");
                });
            })

            .catch((err) => console.log(err));
    }

    getRandomSurvivorPerks() {
        console.log("Entering getRandomSurvivorPerks");
        // Get random survivor perks
        axios.get(process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + "api/survivor/perks/random")
            .then((res) => this.setState({ randomSurvivorPerks: res.data }, () => {
                console.log("LUKE:" + JSON.stringify(this.state.randomSurvivorPerks));
                console.log("Leaving getRandomSurvivorPerks");
            }))
            .catch((err) => console.log(err));
    }
}

export default App;