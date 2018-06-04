export const setUnitFormat = unitFormat => ({
    type: 'SET_UNIT_FORMAT',
    units: unitFormat
})

export const setCountry = country => ({
    type: 'COUNTRY_SELECT',
    country
})

export const catchWeatherData = weatherData => ({
    type: 'CATCH_WEATHER_DATA',
    weatherData
})
