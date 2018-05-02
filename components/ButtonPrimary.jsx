import React, { Component } from "react";
import { Button } from 'react-bootstrap';


class e2pButtonPrimary extends React.Component {
    handleClick = () => {
        console.log("button pressed");
    };

    render() {
        return (
            <Button style={{
                width: 205,
                height: 38,
                borderRadius: 12,
                borderColor: this.props.buttonColor,                
                backgroundColor: this.props.buttonColor,
                color: "#fff",
                fontSize: 18,
                display: 'block', 
                margin: 'auto'
            }} onClick={this.handleClick}>
                {this.props.children}
            </Button>
        );
    }
}


export default e2pButtonPrimary;
