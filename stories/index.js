import './../css/bootstrap/css/bootstrap.css';
import './../css/custom.css'
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import ButtonPrimary from '../components/ButtonPrimary';
import NumberInput from '../components/NumberInput';
import PhoneInput from '../components/PhoneInput';
import TransferStepsBar from '../components/TransferStepsBar';
import AddressButton from '../components/AddressButton';
import Header from '../components/Header';


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
        <TransferStepsBar step={1} />
    ))
    .addWithJSX('NumberInput', () => (
        <NumberInput placeholder={"placeholder text"}></NumberInput>
    ))
    .addWithJSX('PhoneInput', () => (
        <PhoneInput/>
    ));


storiesOf('Header', module)
    .addWithJSX('AddressButton', () => (
        <AddressButton className={'addressButton'} address="0xfa071DCf1FA4e777a9fAbFB6383Fb54e73B9D545"/>
    ))
    .addWithJSX('Header', () => (
        <Header address="0xfa071DCf1FA4e777a9fAbFB6383Fb54e73B9D545"/>
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