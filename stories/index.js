import './../css/bootstrap/css/bootstrap.css';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';


storiesOf('Components', module)
    .addWithJSX('Button', () => (
	    <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .addWithJSX('Button (disabled)', () => (
	    <Button onClick={action('clicked')} disabled={true}>Hello Button</Button>
    ))
    .addWithJSX('Button primary', () => (
	    <Button onClick={action('clicked')} disabled={true} className={'primary'}>Hello Button</Button>
    ))
     .addWithJSX('TransferStepsBar (active)', () => (
	 <div>Not Implemented!</div>
     ))
     .addWithJSX('TransferStepsBar (completed)', () => (
	 <div>Not Implemented!</div>
     ))
     .addWithJSX('NumberInput', () => (
	 <div>Not Implemented!</div>
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



