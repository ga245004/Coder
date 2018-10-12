console.log("bootstraping..");
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import CodeMirror from 'react-codemirror2';
import ('codemirror/mode/xml/xml');
import ('codemirror/mode/javascript/javascript');

import React from 'react';
import ReactDom from 'react-dom';

import App from './App/App';

ReactDom.render(
    <App/>, document.getElementById('root'));
