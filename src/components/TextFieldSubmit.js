import React, { Component } from 'react';
import store from '../store'
import { handleSubmit } from '../helpers'

import { handleCityChange } from '../actions/index'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'


export default class TextFieldSubmit extends Component { 

    onChange(e) {
        store.dispatch(handleCityChange(e.target.value))
    }

    render() {
        const { city } = store.getState()
        return (
            <div style={{display: 'inline-block'}} >
                <TextField
                        value={city}
                        onChange={this.onChange}
                        style={{margin: '0px 15px'}}
                        helperText="Select a city in the selected country"
                />
                <Button variant="raised" color="primary" onClick={handleSubmit}>
                        Search
                </Button>
            </div>
        )
    }
}
