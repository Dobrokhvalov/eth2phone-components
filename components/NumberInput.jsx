import React, { Component } from "react";
import { FormControl } from 'react-bootstrap';


class e2pInput extends React.Component {
    render() {
        return (
            <FormControl style={{
                width: 290,
                height: 38,
                borderRadius: 12,
                border: '4 solid #f5f5f5',
                opacity: this.props.opacity,
                color: this.props.fontColor,
                fontSize: 9
            }}>
                {this.props.children}
            </FormControl>
        )
    }
}

export default e2pInput;
