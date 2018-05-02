import React, { Component } from 'react';
import TransferStepsBar from './TransferStepsBar';
import e2pLogo from './eth2phone-logo.png';
import ButtonPrimary from './ButtonPrimary';



class SendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testStep: 3
        };
    }

    _renderStatusText = (step) => {
        let title, progBarStyle, dot1Style, dot2Style, dot3Style, textStyle1, textStyle2, textStyle3, pendingText;
        const labelStyle = { width: 60, height: 15, textAlign: "center", fontSize: 12 };

        switch (this.state.testStep) {
            case 1:
                return (
                    <div>
                        <div style={{ fontSize: 18 }}>{title}</div>
                    </div>

                );
                break;
            case 2:
                return (
                    <div>
                        <div style={{ fontSize: 18 }}>Do not close app while processing</div>
                    </div>

                );
                break;
            case 3:
                return (
                    <div>
                        <div style={{ fontSize: 18, marginBottom: 17 }}>
                        <div style={{display: 'inline-block', marginRight: 5}}>You have successfully sent</div>
                        <div style={{display: 'inline-block', color: '#2bc64f'}}>3 ETH</div>
                        <div style={{marginTop: 5}}>to +1234567</div>                     
                        </div>
                        <div style={{ fontSize: 12, marginBottom: 18 }}>Share this link with recipient by copying to clipboard</div>
                        <div style={{width: 258, height: 44, display: 'block', margin: 'auto', wordWrap: 'break-word', fontSize: 12, color: '#0099ff', lineHeight: 1.3}}>https://eth2phone.github.io/?tab=receiveTab&code=BASDBK0O&phone=+79112721136</div>
                    </div>

                );
                break;
        }

    }


    render() {
        return (
            <div>
                <div><img src={e2pLogo} style={{ display: 'block', margin: 'auto', marginTop: 17, marginBottom: 35 }} /></div>
                <div style={{ marginBottom: 57 }}><TransferStepsBar step={2} /></div>
                <div style={{ textAlign: 'center', marginBottom: 28 }}>{this._renderStatusText(this.props.step)}</div>
                <ButtonPrimary buttonColor='#0099ff'>
						Share link
					      </ButtonPrimary>
            </div>
        )
    }
}

export default SendForm;