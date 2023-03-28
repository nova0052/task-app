import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsmobile from './aws-exports';
import App from './App';

Amplify.configure(awsmobile);

const AuthenticatedApp = withAuthenticator(App);

ReactDOM.render(<AuthenticatedApp />, document.getElementById('root'));

