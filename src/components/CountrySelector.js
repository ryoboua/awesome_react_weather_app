
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import countryList from '../country_list'
import { NativeSelect } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

export default class CountrySelector extends Component {
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
            <FormControl>
                <NativeSelect
                    id="select-country"
                    value={this.props.selectedCountry}
                    onChange={this.handleCountrySelect}
                    >
                    { countryList.map( country => <option key={country.code} value={country.code}>{country.name}</option>) }
                </NativeSelect>
                <FormHelperText>Please select a country</FormHelperText>
            </FormControl>
        )
    }
}