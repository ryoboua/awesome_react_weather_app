export const setUnitFormat = units => ({
    type: 'SET_UNIT_FORMAT',
    units
})

export const setCountry = country => ({
    type: 'COUNTRY_SELECT',
    country
})

export const getWeather = (city, country) => ({
    type: 'GET_WEATHER',
    city,
    country
})

export const catchWeatherData = weatherDataArr => ({
    type: 'CATCH_WEATHER_DATA',
    weatherDataArr
})

export const handleCityChange = city => ({
    type: 'HANDLE_CITY_CHANGE',
    city
})