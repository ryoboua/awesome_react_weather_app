
import React, { Component } from 'react'
import { setCountry } from '../actions/index'
import store from '../store'
import countryList from '../country_list'
import { NativeSelect } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

export default class CountrySelector extends Component {

    handleChange = e => {
        store.dispatch(setCountry(e.target.value))
    }

    render(){
        const { country } = store.getState()
        return (
            <FormControl>
                <NativeSelect
                    id="select-country"
                    value={country}
                    onChange={this.handleChange}
                    >
                    { countryList.map( country => <option key={country.code} value={country.code}>{country.name}</option>) }
                </NativeSelect>
                <FormHelperText>Please select a country</FormHelperText>
            </FormControl>
        )
    }
}