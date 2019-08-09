import ReactGA from 'react-ga';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import IntroText from './components/introText';
import firebase from './components/firebase';
import { Form } from './components/form';

ReactGA.initialize('UA-145379710-1');

function App() {
  return (
  	<div>
	    <IntroText />
	    <Form />
	  </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));
