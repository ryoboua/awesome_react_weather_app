import React, { Component } from 'react';
import WeatherApp from './components/WeatherApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherApp />
      </div>
    );
  }
}

export default App;
