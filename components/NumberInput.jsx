import React, { Component } from "react";
import { FormControl } from 'react-bootstrap';


class e2pInput extends React.Component {
    render() {
        return (
            <FormControl style={{
                width: 290,
                height: 38,
                borderRadius: 12,
                borderColor: '#f5f5f5',
                borderWidth: 2,
                opacity: this.props.opacity,
                color: this.props.fontColor,
                fontSize: 16,
                textAlign: 'center',
                boxShadow: 0,
            }} placeholder={this.props.placeholder}>
                {this.props.children}
            </FormControl>
        )
    }
}

export default e2pInput;
