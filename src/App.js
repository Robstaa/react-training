import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat.js';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleFlats: []
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

  render() {
    const center = {
      lat: 59.955413,
      lng: 30.337844
    }
    return (
      <div className="app">
        <div className ="flats">
          {this.state.exampleFlats.map((flat) => {
            return <Flat flat={flat} />
          })}

        </div>
        <div className="map">
        <GoogleMapReact
          center={center}
          zoom={11}
        ></GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
