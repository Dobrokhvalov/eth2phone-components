import React, { Component } from "react";
import { Button } from 'react-bootstrap';


class e2pButton extends React.Component {
    handleClick = () => {
	console.log("button pressed");
    };

    render() {
	return (
		<Button bsStyle="primary" onClick={this.handleClick}>
		{this.props.children}
		</Button>
	);
    }
}


export default e2pButton;
