import { catchWeatherData } from './actions/index'
import store from './store'

const APIPrefix = "https://api.openweathermap.org/data/2.5/forecast/daily?q="
const APIKey = process.env.REACT_APP_APIKEY

const getWeatherData = async (city, country) => {
    const weatherData = await Promise.all( 
        //API has kelvin as default - kelvin = ''
        ['metric', 'imperial', '']
            .map( unitFormat => 
                fetch(APIPrefix + city + ',' + country + '&cnt=7&units=' + unitFormat + '&APPID=' + APIKey)
                        .then(response => response.json())
        )
    )
    return weatherData
}

export const handleSubmit = () => {
    const { city, country } = store.getState()
    city === '' ?
    alert('Please Enter a city in the selected country')
    :
    getWeatherData(city, country).then(data => store.dispatch(catchWeatherData(data)))
}