import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CountrySelector from './CountrySelector'
import TextField from '@material-ui/core/TextField';
import WeatherTable from './WeatherTable'
import MetricSelector from './MetricSelector'
import rootReducer from '../reducers/index'
import {setUnitFormat, setCountry, catchWeatherData} from '../actions/index'
import { createStore, applyMiddleware } from 'redux'
import TextFieldSubmit from './TextFieldSubmit'
import thunkMiddleware from 'redux-thunk'


const APIPrefix = "http://api.openweathermap.org/data/2.5/forecast/daily?q="
const APIKey = "e088f9ea8ecf5826cbe251b88a835822";

const getWeatherData = (city, country, units) => {
    return fetch(APIPrefix + city + ',' + country + '&cnt=7&units=' + units + '&APPID=' + APIKey)
            .then(response => response.json())
}

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default class WeatherApp extends Component {
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCountrySelect = this.handleCountrySelect.bind(this)
        this.setUnitFormat = this.setUnitFormat.bind(this)
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
      }

    handleCountrySelect(country){
        console.log(country)
        store.dispatch(setCountry(country))

    }

    handleSubmit(city){
        const state = store.getState()

        city === '' ?
        alert('Please Enter a city in the selected country')
        :
        fetch(APIPrefix + city + ',' + state.country + '&cnt=7&units=' + state.units + '&APPID=' + APIKey)
                    .then(response => response.json()).then(data => store.dispatch(catchWeatherData(data)))

        // this.setState({getCity: this.state.city, getCountry: this.state.country}, () => {
        //     this.state.getCity === '' ?
        //     alert('Please Enter a city in the selected country')
        //     :
        //     getWeatherData(this.state.getCity, this.state.getCountry, this.state.unitFormat).then(this.catchWeatherData)
        // })
    }

    checkWeatherData(weatherData){
        console.log(weatherData)
        weatherData.cod === '404' ?
        this.setState({ weatherData: null, city: '' }, () => alert(weatherData.message))
        :
        this.setState({ weatherData })
    }

    setUnitFormat(unitFormat){
        store.dispatch(setUnitFormat(unitFormat))
    }

    render(){
        const state = store.getState()
        console.log(state)
        return (
            <div onKeyPress={ (event) => (event.key === 'Enter') ? this.handleSubmit() : null }>
                <h1 style={{ color: '#303f9f'}} >Awesome WeatherApp</h1>
                <CountrySelector
                    handleCountrySelect={this.handleCountrySelect}
                    selectedCountry={state.country}
                />
                <TextFieldSubmit onSubmit={this.handleSubmit} />
                <MetricSelector
                    setUnitFormat={this.setUnitFormat}
                    unitFormat={state.units}
                />

                {state.weatherData && <WeatherTable weatherData={state.weatherData} unitFormat={state.units} />}
            </div>
        )
    }
}
