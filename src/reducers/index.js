import { combineReducers } from 'redux'

function countrySelectReducer(state = 'CA', { type, country }) {
    if (type === 'COUNTRY_SELECT'){
        return country
    } else {
        return state
    }
}

function unitSelectReducer( state = 'metric', { type, units }) {
    if (type === 'SET_UNIT_FORMAT'){
        return units
    } else {
        return state
    }
}

function catchWeatherData( state = null, { type, weatherDataArr }) {
    if (type === 'CATCH_WEATHER_DATA') {
        if (weatherDataArr[0].cod === '404') {
            alert(weatherDataArr[0].message)
            return state
        } else {
            return weatherDataArr
        }
    } else {
        return state
    }
}

function cityReducer( state = '', { type, city } ) {
    if(type === 'HANDLE_CITY_CHANGE') {
        return city
    } else {
        return state
    }
}

export default combineReducers({
    country: countrySelectReducer,
    weatherDataArr: catchWeatherData,
    units: unitSelectReducer,
    city: cityReducer,
})