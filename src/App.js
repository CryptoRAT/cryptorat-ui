import React, { Component } from "react";

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
      survivorName: "Ace Visconti"
    };
  }

  // displayRandom = (status) => {
  //   if (status) {
  //     return this.setState({ randomCalculated: true });
  //   }
  //
  //   return this.setState({ randomCalculated: false });
  // };

  renderSurvivorTitle = () => {
    return (
        <div className="nav nav-tabs">
        <span
            className={this.state.randomCalculated ? "nav-link active" : "nav-link"}
            onClick={() => this.displayRandom(true)}
        >
          Survivor
        </span>
        </div>
    );
  };

  renderSurvivorName = () => {

    const randomSurvivor = this.state.survivorsList.filter(
        (survivor) => survivor.name === "Ace Visconti"
    );

    console.log("Random Survivor: " + JSON.stringify(randomSurvivor))
    console.log("Survivor Name: " + randomSurvivor.name);

    // return randomSurvivor['name'];
    return <div>Survivor: {this.state.survivorName}</div>;
  };

  render() {
    return (
        <main className="container">
          <h1 className="text-white text-uppercase text-center my-4">Dead by Daylight Randomizer App</h1>
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <div className="mb-4">
                  <button
                      className="btn btn-primary"
                  >
                    Select Random Survivor
                  </button>
                </div>
                <div>{this.renderSurvivorTitle()}</div>
                <div>{this.renderSurvivorName()}</div>
                {/*<div>{"Ace Visconti"}</div>*/}
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default App;