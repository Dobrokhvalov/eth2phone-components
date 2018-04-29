import React, { Component } from "react";
import AddressButton from './AddressButton';


class e2pHeader extends React.Component {
    handleClick = () => {
        console.log("button pressed");
    };

    render() {
        return (
            <AddressButton className={'addressButton'}>0x...545</AddressButton>
        );
    }
}


export default e2pHeader;
