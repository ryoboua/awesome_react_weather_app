import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class TextFieldSubmit extends Component {
    constructor(props){
        super(props)

        this.state = {
            value: ''
        }
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit() {
        this.props.onSubmit(this.state.value)
    }

    render() {
        return (
            <div style={{display: 'inline-block'}} >
                <TextField
                        value={this.state.value}
                        onChange={this.onChange}
                        style={{margin: '0px 15px'}}
                        helperText="Select a city in the selected country"
                />
                <Button variant="raised" color="primary" onClick={this.handleSubmit}>
                        Search
                </Button>
            </div>
        )
    }
}
