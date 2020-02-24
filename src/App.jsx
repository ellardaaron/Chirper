import React, { Component } from 'react'
import Header from './Components/Header'
import Chirps from './Components/Chirps'
import AddChirp from './Components/AddChirp'
import Slogan from './Components/Slogan'
import RedBird from './Components/red_bird.jpg'


export class App extends Component {
  state = {
    chirps: [
      {
        userName: "in_jail_out_soon",
        chirp: "ME: I'm much better thinking outside the box PRISON GUARD: Still no",
        id: 1
      },
      {
        userName: "apple_taters",
        chirp: "Some of y'all missed your appointment with the priest for your exorcism and it shows.",
        id: 2
      },
      {
        userName: "failed_aunt_89",
        chirp: "Encourage your children to be unfriendly so you can keep your weekends free of other kids' parties.",
        id: 3
      }
    ]
  }

  //Add Chirp
  addChirp = (userName, chirp) => {

    var last = function (array, n) {
      if (array == null)
        return void 0;
      if (n == null)
        return array[array.length - 1];
      return array.slice(Math.max(array.length - n, 0));
    };

    const newChirp = {
      id: (last(this.state.chirps).id) + 1,
      userName,
      chirp,
    }
    this.setState({ chirps: [...this.state.chirps, newChirp] })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Header />
            </div>
            <div className="col-sm">
              <Slogan />
            </div>
            <div className="col-sm text-center align-middle">
              <img src={RedBird} height={100} alt={"Unavailable"}></img>
            </div>
          </div>
        </div>


        <AddChirp addChirp={this.addChirp} />
        <Chirps chirps={this.state.chirps} /> {/* this line pulls the property chirps from the above state and passes it to the Chirps.jsx file so we can manipulate it in there */}
      </div>
    )
  }
}

export default App

