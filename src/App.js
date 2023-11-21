import React, {Component} from "react";
import './css/RandomPerksList.css';
import axios from "axios";

const survivorsList = [
    {
        id: 1,
        name: "Ace Visconti",
        image_path: "static/survivors/ace_visconti.jpg",
    },
    {
        id: 2,
        name: "Vittorio Toscano",
        image_path: "static/survivors/vittorio_toscano.jpg",
    },
    {
        id: 3,
        name: "Nancy Wheeler",
        image_path: "static/survivors/nancy_wheeler.jpg",
    },
    {
        id: 4,
        name: "Claudette Morel",
        image_path: "static/survivors/claudette_morel.jpg",
    },
];

const survivorsPerkList = [
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

const survivorsRandomPerkList = [
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
            survivorsList: survivorsList,
            survivorPerksList: survivorsPerkList,
            survivorsRandomPerkList: survivorsRandomPerkList,
            survivorName: "Ace Visconti",
            survivorImagePath: "static/survivors/ace_visconti.jpg",
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        // Refresh survivors list
        axios
            .get(process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + "api/survivor/")
            .then((res) => this.setState({survivorsList: res.data}))
            .catch((err) => console.log(err));
        // Refresh survivor perks list
        axios.get(process.env.REACT_APP_DBD_RANDOMIZER_SERVICE_URL + "api/survivor-perks/")
            .then((res) => this.setState({survivorPerksList: res.data}))
            .catch((err) => console.log(err));
    };

    calculateRandom = (status) => {
        if (status) {
            let survivor = this.getRandomSurvivor();
            this.setState({survivorName: survivor.name});
            this.setState({survivorImagePath: survivor.image_path});
            let randomSurivorPerks = [];
            randomSurivorPerks.push(this.getRandomSurvivorPerk([]));
            randomSurivorPerks.push(this.getRandomSurvivorPerk([randomSurivorPerks[0].name]));
            randomSurivorPerks.push(this.getRandomSurvivorPerk([randomSurivorPerks[0].name,
                randomSurivorPerks[1].name]));
            randomSurivorPerks.push(this.getRandomSurvivorPerk([randomSurivorPerks[0].name,
                randomSurivorPerks[1].name,
                randomSurivorPerks[2].name]));
            this.setState({survivorsRandomPerkList: randomSurivorPerks});
            // this.setState(prevState => ({
            //     items: {
            //         ...prevState.items,
            //         [prevState.items[0].name]: this.getRandomSurvivorPerk([]),
            //     },
            // }));
            // this.setState(prevState => ({
            //     items: {
            //         ...prevState.items,
            //         [prevState.items[1].name]: this.getRandomSurvivorPerk([
            //             this.state.survivorPerksList[0].name]),
            //     },
            // }));
            // this.setState(prevState => ({
            //     items: {
            //         ...prevState.items,
            //         [prevState.items[2].name]: this.getRandomSurvivorPerk([
            //             this.state.survivorPerksList[0].name,
            //             this.state.survivorPerksList[1].name]),
            //     },
            // }));
            // this.setState(prevState => ({
            //     items: {
            //         ...prevState.items,
            //         [prevState.items[3].name]: this.getRandomSurvivorPerk([
            //             this.state.survivorPerksList[0].name,
            //             this.state.survivorPerksList[1].name,
            //             this.state.survivorPerksList[2].name]),
            //     },
            // }));
        }

        return this.setState({randomCalculated: status});
    };

    renderGenerateRandomButton = () => {
        return (
            <div>
                <button className="btn btn-primary" onClick={() => {
                    this.calculateRandom(true);
                }}>
                    Generate Random Survivor Build
                </button>
            </div>);
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
                            <div>Survivor: {this.state.survivorName}</div>
                            <div><img className="profile-photo" src={this.state.survivorImagePath}
                                      alt={this.state.survivorName}/></div>
                        </div>
                        <div className="card p-3">
                            {this.state.survivorsRandomPerkList.map((survivor, index) => (
                                <div className="RandomPerksList" key={index} item={survivor.name}>
                                    <div><img className="profile-photo" src={survivor.image_path}
                                              alt={survivor.name}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    getRandomSurvivor() {
        return this.state.survivorsList[Math.floor(Math.random() * this.state.survivorsList.length)];
    }

    getRandomSurvivorPerk(excludedPerks) {
        let availablePerks = this.state.survivorPerksList.filter(perk => !excludedPerks.includes(perk.name));
        return availablePerks[Math.floor(Math.random() * availablePerks.length)];
    }
}

export default App;