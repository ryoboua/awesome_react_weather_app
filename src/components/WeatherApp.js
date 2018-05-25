import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CountrySelector from './CountrySelector'
import TextField from '@material-ui/core/TextField';
import WeatherTable from './WeatherTable'
import MetricSelector from './MetricSelector'

const APIPrefix = "http://api.openweathermap.org/data/2.5/forecast/daily?q="
const APIKey = "e088f9ea8ecf5826cbe251b88a835822";

const getWeatherData = (city, country, units) => {
    return fetch(APIPrefix + city + ',' + country + '&cnt=7&units=' + units + '&APPID=' + APIKey)
            .then(response => response.json())
}

export default class WeatherApp extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            getCity: '',
            getCountry: 'CA',
            city: '',
            country: 'CA',
            weatherData: null,
            unitFormat: 'metric'
        }
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCountrySelect = this.handleCountrySelect.bind(this)
        this.catchWeatherData = this.catchWeatherData.bind(this)
        this.setUnitFormat = this.setUnitFormat.bind(this)
    }

    handleCityChange(event){
        this.setState({city: event.target.value})
    }

    handleCountrySelect(country){
        console.log(country)
        this.setState({ country })
    }

    handleSubmit(){
        this.setState({getCity: this.state.city, getCountry: this.state.country}, () => {
            this.state.getCity === '' ? 
            alert('Please Enter a city in the selected country')
            : 
            getWeatherData(this.state.getCity, this.state.getCountry, this.state.unitFormat).then(this.catchWeatherData)
        })  
    }

    catchWeatherData(weatherData){
        console.log(weatherData)
        weatherData.cod === '404' ?
        this.setState({ weatherData: null, city: '' }, () => alert(weatherData.message))
        : 
        this.setState({ weatherData })
    }

    setUnitFormat(unitFormat){
        this.setState({ unitFormat }, () => {
            if (this.state.city !== '') getWeatherData(this.state.getCity, this.state.getCountry, this.state.unitFormat).then(this.catchWeatherData)
        })
    }

    render(){
        return (
            <div onKeyPress={ (event) => (event.key === 'Enter') ? this.handleSubmit() : null }>
                <h1 style={{ color: '#303f9f'}} >Awesome WeatherApp</h1>
                <CountrySelector 
                    handleCountrySelect={this.handleCountrySelect} 
                    selectedCountry={this.state.country} 
                />
                <TextField
                    value={this.state.city}
                    onChange={this.handleCityChange}
                    style={{margin: '0px 15px'}}
                    helperText="Select a city in the selected country"
                />
                <Button variant="raised" color="primary" onClick={this.handleSubmit}>
                    Search
                </Button>
                <MetricSelector 
                    setUnitFormat={this.setUnitFormat} 
                    unitFormat={this.state.unitFormat} 
                />
                
                {this.state.weatherData && <WeatherTable weatherData={this.state.weatherData} unitFormat={this.state.unitFormat} />}
            </div>
        )
    }
}