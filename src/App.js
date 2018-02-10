import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat.js';
import GoogleMapReact from 'google-map-react';
import Marker from "./components/marker.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleFlats: [],
      selectedFlat: null
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          exampleFlats: data
        })
      })
  };

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    })
  }

  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    }

    let zoom = 11

    if(this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      };
      zoom = 15;
    }

    return (
      <div className="app">
        <div className ="flats">
          {this.state.exampleFlats.map((flat) => {

              return <Flat
                key={flat.name}
                flat={flat}
                handleClick={this.selectFlat}
              />

          })}
        </div>

        <div className="map">
        <GoogleMapReact
          center={center}
          zoom={zoom}
        >
          {this.state.exampleFlats.map((flat) => {
            return <Marker selected={flat === this.state.selectedFlat} key={flat.name} lat={flat.lat} lng={flat.lng} text={flat.price} curr={flat.priceCurrency} />
          })}
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
