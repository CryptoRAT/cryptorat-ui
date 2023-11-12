import React, { Component } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorsList: survivorsList,
      survivorName: "Ace Visconti",
      survivorImagePath: "static/survivors/ace_visconti.jpg"
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
        .get("api/survivors/")
        .then((res) => this.setState({ survivorsList: res.data }))
        .catch((err) => console.log(err));
  };

  calculateRandom = (status) => {
    console.log("entering calculateRandom");
    if (status) {
      let survivor = this.getRandomSurvivor();
      this.setState({ survivorName: survivor.name });
      this.setState({ survivorImagePath: survivor.image_path });
    }

    console.log("returning from calculateRandom with randomCalculated: " + status);
    return this.setState({ randomCalculated: status });
  };

  renderGenerateRandomButton = () => {
    console.log("entering renderGenerateRandomButton");
    console.log("returning from renderGenerateRandomButton")
    return (
        <div>
          <button className="btn btn-primary" onClick={() => {
            console.log("Button Clicked");
            this.calculateRandom(true);
          }}>
            Generate Random Survivor Build
          </button>
        </div>);
  };

  render() {
    console.log("entering render");
    console.log("returning from render");
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
                <div><img className="profile-photo" src={this.state.survivorImagePath} alt={this.state.survivorName}/></div>
              </div>
            </div>
          </div>
        </main>
    );
  }

  getRandomSurvivor() {
    console.log("entering getRandomSurvivor");
    let survivor = this.state.survivorsList[Math.floor(Math.random()*this.state.survivorsList.length)];
    console.log("Survivor: " + survivor)
    console.log("returning from getRandomSurvivor")
    return survivor;
  }
}

export default App;