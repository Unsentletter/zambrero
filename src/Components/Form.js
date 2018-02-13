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
            contactNumber: {
                mobile: '',
                home: '',
                work: ''
            },
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
        })
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
        const { name, contactDetails, guardianRequired, gender, dateOfBirth } = this.props.schema.form;
        let consentDetails = [];
        let nameDetails = [];
        let dateDetails =[];
        let genderDetails = [];
        let contactNumberDetails = [];
        let consentRequired = [];


        const nameField = (
            <div>
                <label>Name:</label><br />
                <input type="text" name="name" value={ this.state.name } onChange={ this.handleChange } className="data-input"/>
            </div>
        );

        const dateField = (
            <div>
                <label>Date Of Birth:</label><br />
                <DayPickerInput onDayChange={this.handleDayChange} className="data-input"/>
            </div>
        );

        const genderField = (
            <div>
                <label>Gender</label><br />
                <select name="gender" value={ this.state.gender} onChange={ this.handleChange } className="data-input">
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                </select>
            </div>
        );

        const guardianConsentField = (
            <div>
                <label>Do you require guardian consent?:</label><br />
                <input name="consentRequired" type="checkbox" onClick={this.handleToggle} className="data-input"/>
            </div>
        );

        const contactNumberField = (
            <div>
                <label>Contact Number</label><br />
                <input type="text" name="contactNumber.home" value={ this.state.contactNumber.home } onChange={ this.handleChange } className="data-input"/><br/>
                <input type="text" name="work" value={ this.state.contactNumber.work } onChange={ this.handleChange } className="data-input"/><br/>
                <input type="text" name="mobile" value={ this.state.contactNumber.mobile } onChange={ this.handleChange } className="data-input"/><br/>
            </div>
        );

        const guardianField = (
            <div>
                <label>Guardian Details</label>
                <input type="text" name="guardianDetails" value={ this.state.guardianDetails } onChange={ this.handleChange} className="data-input"/>
            </div>
        );

        nameDetails.push(
            <div>{name ? nameField : null}</div>
        );

        dateDetails.push(
            <div>{dateOfBirth ? dateField : null}</div>
        );

        genderDetails.push(
            <div>{gender ? genderField : null}</div>
        );

        contactNumberDetails.push(
            <div>{contactDetails ? contactNumberField : null}</div>
        );

        consentRequired.push(
            <div>{guardianRequired ? guardianConsentField : null}</div>
        );

        consentDetails.push(
            <div>{this.state.consentRequired? guardianField : null}</div>
        );

        return (
            <div className="formDiv">
                <form className="formContainer" onSubmit={ this.handleSubmit }>
                    {nameDetails}
                    <br />
                    {dateDetails}
                    <br />
                    {genderDetails}
                    <br />
                    {contactNumberDetails}
                    <br />
                    {consentRequired}
                    <br />
                    {consentDetails}
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;
