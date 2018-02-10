import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat.js';

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
  }


  render() {
    return (
      <div className="app">
        <div className ="flats">
          {this.state.exampleFlats.map((flat) => {
            return <Flat flat={flat} />
          })}

        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
