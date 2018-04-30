import React, { Component } from "react";
import { FormControl } from 'react-bootstrap';
import Phone from 'react-phone-input-2';

import { asYouType } from 'libphonenumber-js';




class e2pPhoneInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ""
        };
    }

    handleOnChange(value) {

    }

    render() {
        return (
            <Phone inputStyle={{ width: 295, height: 38, borderRadius: 12, border: '2px solid #f5f5f5' }}
                buttonStyle={{ borderBottom: '2px solid #f5f5f5', borderTop: '2px solid #f5f5f5', borderLeft: '2px solid #f5f5f5', borderRight: '0px', borderRadius: 12, borderBottomRightRadius: 0, borderTopRightRadius: 0, backgroundColor: 'white' }}
                defaultCountry={'us'}
                onChange={(value) => {
                    this.setState({
                        phone: value
                    })
                }} />


        )
    }
}

export default e2pPhoneInput;
