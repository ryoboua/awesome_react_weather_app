import { combineReducers } from 'redux'

const APIPrefix = "http://api.openweathermap.org/data/2.5/forecast/daily?q="
const APIKey = "e088f9ea8ecf5826cbe251b88a835822";

function countrySelectReducer(state = 'CA', action) {
    if (action.type === 'COUNTRY_SELECT'){
        return action.country
    } else {
        return state
    }
}

function unitSelectReducer( state = 'metric', action) {
    if (action.type === 'SET_UNIT_FORMAT'){
        return action.units
    } else {
        return state
    }
}

function catchWeatherDataReducer( state = null, action) {
    if (action.type === 'CATCH_WEATHER_DATA'){
        return action.weatherData
    } else {
        return state
    }
}
export default combineReducers({
    country: countrySelectReducer,
    weatherData: catchWeatherDataReducer,
    units: unitSelectReducer
})
