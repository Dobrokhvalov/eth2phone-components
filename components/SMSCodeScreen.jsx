import React, { Component } from 'react';
import TransferStepsBar from './TransferStepsBar';
import e2pLogo from './eth2phone-logo.png';
import ButtonPrimary from './ButtonPrimary';
import NumberInput from './NumberInput';
import Button from './Button';
import Timer from 'react-timer-component';
import PropTypes from 'prop-types'



class SMSCodeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smsCode: "",
            timer: true,
            buttonDisabled: true,
            buttonOpacity: 0.1
        };
    }


    render() {
        console.log(this.state.buttonDisabled)
        return (
            <div>
                <div><img src={e2pLogo} style={{ display: 'block', margin: 'auto', marginTop: 52, marginBottom: 25 }} /></div>
                <div style={{ height: 28, width: 224, margin: 'auto', marginBottom: 46, display: 'block', textAlign: 'center', fontSize: 12 }}>Eth2phone allows to send Ether to anybody using phone number</div>
                <div style={{ height: 22, width: 286, display: 'block', margin: 'auto', marginBottom: 28, textAlign: 'center', fontSize: 18 }}>Enter SMS code you've received</div>
                <NumberInput placeholder="Code from SMS" onChange={(value) => this.setState({ smsCode: value })} />
                <div style={{ width: 285, height: 38, display: 'block', margin: 'auto', marginTop: 47, marginBottom: 43 }}>
                    <div style={{ display: 'inline-block', float: 'left' }}><Button buttonColor='#0099ff' opacity={this.state.buttonOpacity} disabled={this.state.buttonDisabled} onClick={() => this.setState({timer: true, buttonDisabled: true, buttonOpacity: 0.1})}>Send again</Button></div>
                    <div style={{ display: 'inline-block', float: 'right' }}><Button buttonColor='#2bc64f'>Receive</Button></div>
                </div>
                {this.state.timer ? (<div style={{ height: 28, width: 210, margin: 'auto', marginBottom: 46, display: 'block', textAlign: 'center', fontSize: 12 }}>Send code again in <Timer style={{ display: 'inline-block' }} afterComplete={() => this.setState({buttonDisabled: false, buttonOpacity: 1, timer: false})} interval={1000} remaining={5000}>
                    <Countdown />
                </Timer> seconds
                    </div>) : <div></div>}
            </div>
        )
    }
}

const Countdown = (props, context) => {
    const d = new Date(context.remaining);
    const { seconds } = {
        seconds: d.getUTCSeconds(),

    };
    return (
        <p>{`${seconds}`}</p>
    );
};

Countdown.contextTypes = {
    remaining: PropTypes.number,
};

export default SMSCodeScreen;