
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import countryList from '../country_list'

class CountrySelector extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedCountry: 'CA'
        }
        this.handleCountrySelect = this.handleCountrySelect.bind(this)
    }

    handleCountrySelect(event){
        this.props.handleCountrySelect(event.target.value)
    }

    render(){ 
        return (
            <TextField
                id="select-country"
                select
                value={this.props.selectedCountry}
                onChange={this.handleCountrySelect}
                helperText="Please select a country"
                >
                {countryList.map( country => <option key={country.code} value={country.code}>{country.name}</option>)}
            </TextField>
        )
    }
}
export default CountrySelector