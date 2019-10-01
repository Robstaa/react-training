import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat.js';
import GoogleMapReact from 'google-map-react';
import Marker from "./components/marker.js"
import Search from "./components/search.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleFlats: [],
      allFlats: [],
      selectedFlat: null,
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          exampleFlats: data,
          allFlats: data
        })
      })
  };

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    })
  }

  handleSearch = (event) => {
    console.log(event);
    this.setState({
      search: event.target.value,
      exampleFlats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    });
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
        <h1>This is an update</h1>
        <div className ="flats">
        <Search value={this.state.search} onChange={this.handleSearch} ></Search>
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
