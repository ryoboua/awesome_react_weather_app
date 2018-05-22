import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const paperStyle = {
    height: '500px',
    width: '80%',
    margin: '50px auto'
}


const data = {
    "cod":"200","message":0.0032,
    "city":{"id":1851632,"name":"Shuzenji",
    "coord":{"lon":138.933334,"lat":34.966671},
    "country":"JP"},
    "cnt":10,
    "list":[{
        "dt":1406080800,
        "temp":{
            "day":297.77,
            "min":293.52,
            "max":297.77,
            "night":293.52,
            "eve":297.77,
            "morn":297.77},
        "pressure":925.04,
        "humidity":76,
        "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],}
        ]}

class WeatherTable extends Component {
    render(){
        return (
            <Paper style={paperStyle} >
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>DAY</TableCell>
                        <TableCell numeric>DESCRIPTION</TableCell>
                        <TableCell numeric>HIGH / LOW</TableCell>
                        <TableCell numeric>WIND</TableCell>
                        <TableCell numeric>HUMIDITY</TableCell>                      
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.weatherData.list.map( (n,index) => {
                        return (
                            <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                <img src={`http://openweathermap.org/img/w/${n.weather[0].icon}.png`} />
                            </TableCell>
                            <TableCell numeric>{n.weather[0].description}</TableCell>
                            <TableCell numeric>{n.temp.min + '/' + n.temp.max}</TableCell>
                            <TableCell numeric>{n.speed}</TableCell>
                            <TableCell numeric>{n.humidity}</TableCell>
                            </TableRow>
                        );
                        })}
                    </TableBody>
      </Table>
            </Paper>

        )
    }
}

export default WeatherTable