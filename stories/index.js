import './../css/bootstrap/css/bootstrap.css';
import './../css/custom.css';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';


storiesOf('Button', module)
    .addWithJSX('with text', () => (
	    <Button onClick={action('clicked')}>Hello Button</Button>
    ));
