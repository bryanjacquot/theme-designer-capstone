import '../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ThemeDesignerCapstoneDocs from './components/ThemeDesignerCapstoneDocs';

class Main extends Component {
  render () {
    return (
      <ThemeDesignerCapstoneDocs />
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
