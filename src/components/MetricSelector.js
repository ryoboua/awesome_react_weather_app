import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class MetricSelector extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value)
        this.props.setUnitFormat(event.target.value)
      };
    render(){
        return (
            <div style={{display:'block', marginTop: '30px'}}>
                <FormControl component="fieldset">
                    <FormLabel component="legend" focused='true' >Units format</FormLabel>
                    <RadioGroup
                        style={{display:'flex', flexDirection: 'row'}} 
                        aria-label="gender"
                        name="MetricSelector"
                        value={this.props.unitFormat}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="metric" control={<Radio />} label="Celsius" />
                        <FormControlLabel value="imperial" control={<Radio />} label="Fahrenheit" />
                        <FormControlLabel value="" control={<Radio />} label="Kelvin" />
                    </RadioGroup>
                </FormControl>
            </div>
        )
    }
    
}

export default MetricSelector