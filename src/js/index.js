import '../scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Website from './Website';

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Website), element);

document.body.classList.remove('loading');
