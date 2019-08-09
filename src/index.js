import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import IntroText from './components/introText';
import firebase from './components/firebase';
import { Form } from './components/form';

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
