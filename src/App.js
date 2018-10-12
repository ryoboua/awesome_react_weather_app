import React, { Component } from 'react';
import store from './store'
import { handleSubmit } from './helpers'
import CountrySelector from './components/CountrySelector'
import WeatherTable from './components/WeatherTable'
import MetricSelector from './components/MetricSelector'
import TextFieldSubmit from './components/TextFieldSubmit'

class App extends Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
      }

    render(){
        return (
            <div style={{ textAlign: 'center' }} onKeyPress={ (event) => (event.key === 'Enter') ? handleSubmit() : null }>
                <h1 style={{ color: '#303f9f'}} >Awesome Weather App</h1>
                <CountrySelector />
                <TextFieldSubmit />
                <MetricSelector />
                <WeatherTable />
            </div>
        )
    }
}

export default App