import './../css/bootstrap/css/bootstrap.css';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import ButtonPrimary from '../components/ButtonPrimary';
import NumberInput from '../components/NumberInput'
import TransferStepsBar from '../components/TransferStepsBar'


storiesOf('Components', module)
    .addWithJSX('Button', () => (
	    <Button onClick={action('clicked')} className={'button'} fontColor={'white'} buttonColor={e2pColors.green} opacity={1}>Hello Button</Button>
    ))
    .addWithJSX('Button (disabled)', () => (
	    <Button onClick={action('clicked')} className={'buttonDisabled'} fontColor={'white'} buttonColor={e2pColors.green} opacity={0.2} disabled={true}>Hello Button</Button>
    ))
    .addWithJSX('Button primary', () => (
	    <ButtonPrimary onClick={action('clicked')} className={'primary'} fontColor={'white'} buttonColor={e2pColors.blue}>Hello Button</ButtonPrimary>
    ))
     .addWithJSX('TransferStepsBar (active)', () => (
	 <TransferStepsBar step={1}/>
     ))
     .addWithJSX('TransferStepsBar (completed)', () => (
	 <div>Not Implemented!</div>
     ))
     .addWithJSX('NumberInput', () => (
	 <NumberInput placeHolder={"placeholder text"}></NumberInput>
     ))
     .addWithJSX('PhoneInput', () => (
	 <div>Not Implemented!</div>
     ));


storiesOf('Header', module)
    .addWithJSX('AddressButton', () => (
	 <div>Not Implemented!</div>
    ))
    .addWithJSX('Header', () => (
	 <div>Not Implemented!</div>
    ));


storiesOf('Send Screens', module)
    .addWithJSX('SendForm', () => (
	 <div>Not Implemented!</div>
    ))
    .addWithJSX('TransferInProgress', () => (
	 <div>Not Implemented!</div>
    ))

const e2pColors = {
    blue: '#0099ff',
    green: '#2bc64f'
}