import React, { Component } from 'react';

import { setUnitFormat } from '../actions/index'
import store from '../store'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default class MetricSelector extends Component {

    handleChange = e => {
        store.dispatch(setUnitFormat(e.target.value))
    }

    render(){
        const { units } = store.getState()
        return (
            <div style={{display:'block', marginTop: '30px'}}>
                <FormControl component="fieldset">
                    <FormLabel style={{ color: 'black'}} component="legend" focused={true} >Unit Format</FormLabel>
                    <RadioGroup
                        style={{display:'flex', flexDirection: 'row'}} 
                        aria-label="gender"
                        name="MetricSelector"
                        value={units}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="metric" control={<Radio />} label="Celsius" />
                        <FormControlLabel value="imperial" control={<Radio />} label="Fahrenheit" />
                        <FormControlLabel value="kelvin" control={<Radio />} label="Kelvin" />
                    </RadioGroup>
                </FormControl>
            </div>
        )
    }
    
}