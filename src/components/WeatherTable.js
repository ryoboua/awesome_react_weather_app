import React, { Component } from 'react';
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


class WeatherTable extends Component {
    render(){
        const degreeUnit = this.props.unitFormat === 'metric' ? '°C' : this.props.unitFormat === 'imperial' ? '°F' : 'K'
        const speedUnit = this.props.unitFormat === 'metric' || this.props.unitFormat === '' ? 'KPH' : 'MPH'

        return (
            <Paper style={paperStyle} >
                <Table>
                    <TableHead style={{backgroundColor:'#EEF6FB'}} >
                        <TableRow>
                            <TableCell>DAY</TableCell>
                            <TableCell numeric>DESCRIPTION</TableCell>
                            <TableCell numeric>{`HIGH / LOW (${degreeUnit})`}</TableCell>
                            <TableCell numeric>{`WIND (${speedUnit})`}</TableCell>
                            <TableCell numeric>HUMIDITY (%)</TableCell>                      
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.weatherData.list.map( (n,index) => {
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
                            <TableCell numeric>{this.props.unitFormat === 'imperial' ? n.speed : (n.speed * 3.6).toFixed(2)}</TableCell>
                            <TableCell numeric>{n.humidity}</TableCell>
                            </TableRow>
                        )
                        })}
                    </TableBody>
                </Table>
            </Paper>

        )
    }
}

export default WeatherTable