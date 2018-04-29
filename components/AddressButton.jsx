import React, { Component } from "react";
import { Button } from 'react-bootstrap';


class e2pAddressButton extends React.Component {
    handleClick = () => {
        console.log("button pressed");
    };

    render() {
        return (
            <Button style={{
                width: 100,
                height: 22,
                borderRadius: 6,
                borderWidth: 2,
                borderColor: "#2bc64f",                
                backgroundColor: "white",
                color: "#999999",
                fontSize: 12,
                padding: 0,
                paddingTop: 2
            }} onClick={this.handleClick}>
                {this.props.children}
            </Button>
        );
    }
}


export default e2pAddressButton;
