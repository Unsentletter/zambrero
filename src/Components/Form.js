import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import '../Form.css';
import 'react-day-picker/lib/style.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: undefined,
            contactNumber: '',
            gender: '',
            consentRequired: '',
            guardianDetails: '',
            formValid: false
        };
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        },
            () => { this.validateField(name, value) })
    };

    validateField = (fieldName, value) => {
        let validName;

        switch(fieldName) {
            case 'name':
                validName = value.match();
                console.log(validName);
        }
    };

    handleDayChange = day => {
        this.setState({
            date: day
        })
    };

    handleToggle = () => {
        this.setState({
            consentRequired: !this.state.consentRequired
        })
    };

    render() {
        const { consentRequired, name, gender, contactNumber, guardianDetails } = this.state;
        let details = [];

        const guardianField = (
            <div>
                <label>Guardian Details</label>
                <input type="text" name="guardianDetails" value={ guardianDetails } onChange={ this.handleChange} />
            </div>
        );

        details.push(
            <div>{consentRequired? guardianField : null}</div>
        )

        return (
            <div className="formDiv">
                <form className="formContainer" onSubmit={ this.handleSubmit }>
                    <label>Name:</label>
                    <input type="text" name="name" value={ name } onChange={ this.handleChange } />
                    <br />
                    <label>Date Of Birth:</label>
                    <DayPickerInput onDayChange={this.handleDayChange} />
                    <br />
                    <label>Gender</label>
                    <select name="gender" value={ gender} onChange={ this.handleChange }>
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                    </select>
                    <br />
                    <label>Contact Number</label>
                    <input type="text" name="contactNumber" value={ contactNumber } onChange={ this.handleChange } />
                    <br />
                    <label>Do you require guardian consent?:</label>
                    <input name="consentRequired" type="checkbox" onClick={this.handleToggle} />
                    <br />
                    {details}
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default Form;
