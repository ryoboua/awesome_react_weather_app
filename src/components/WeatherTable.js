import React from 'react';
import store from '../store'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const paperStyle = {
    height: 'auto',
    width: '80%',
    margin: 'auto',
    marginBottom: '50px'
}
const weekdays = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat']

export default () => {
    const { weatherDataArr, units } = store.getState()

    const degreeUnit = units === 'metric' ? '°C' : units === 'imperial' ? '°F' : 'K'
    const speedUnit = units === 'metric' || units === 'kelvin' ? 'KPH' : 'MPH'
    
    const weatherData = () => {
        if(weatherDataArr){
            switch(units) {
                case 'metric':
                return weatherDataArr[0]
                case 'imperial':
                return weatherDataArr[1]
                case 'kelvin':
                return weatherDataArr[2]
                default:
                console.log('You broke me')            
            }
        } else {
            return null
        }
    }
    return (
        weatherDataArr 
        && 
        (<Paper style={ paperStyle } >
                <Table>
                    <TableHead style={{backgroundColor:'#EEF6FB'}} >
                        <TableRow>
                            <TableCell style={{color: 'black'}}>DAY</TableCell>
                            <TableCell style={{color: 'black'}} numeric>DESCRIPTION</TableCell>
                            <TableCell style={{color: 'black'}} numeric>{`HIGH / LOW (${degreeUnit})`}</TableCell>
                            <TableCell style={{color: 'black'}} numeric>{`WIND (${speedUnit})`}</TableCell>
                            <TableCell style={{color: 'black'}} numeric>HUMIDITY (%)</TableCell>                      
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {weatherData().list.map( (n, index) => {
                        const d = new Date(n.dt * 1000)
                        return (
                            <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                <div style={{display: 'inline-block'}} >
                                    <p style={{display: 'inline-block'}} >{`${d.getMonth() + 1}/${d.getDate()}`}</p>
                                    <p>{ index === 0 ? 'Today' : weekdays[d.getDay()]}</p>
                                </div>
                                <img src={`http://openweathermap.org/img/w/${n.weather[0].icon}.png`} alt={n.weather[0].main}/>
                            </TableCell>
                            <TableCell numeric>{n.weather[0].description}</TableCell>
                            <TableCell numeric>{n.temp.max + '/' + n.temp.min}</TableCell>
                            <TableCell numeric>{units === 'imperial' ? n.speed : (n.speed * 3.6).toFixed(2)}</TableCell>
                            <TableCell numeric>{n.humidity}</TableCell>
                            </TableRow>
                        )
                        })}
                    </TableBody>
                </Table>
            </Paper>)
        )
}