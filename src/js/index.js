import '../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Section from 'grommet/components/Section';
import Home from './components/Home';
import Details from './components/Details';

class Main extends Component {

  constructor() {
    super();
    this._onClickDetails = this._onClickDetails.bind(this);
    this._onClickHome = this._onClickHome.bind(this);
    this.state = { page: null };
  }

  _onClickDetails(section) {
    this.setState({page: 'details', section: section});
  }

  _onClickHome(section) {
    this.setState({page: 'home'});
  }

  render () {
    let contents;

    if ( this.state.page && this.state.page == 'details' ) {
      contents = <Details section={this.state.section} onClick={this._onClickHome} />;
    } else {
      contents = <Home onClick={this._onClickDetails} />;
    }

    return (
      <App>
        <Section pad="none" full={true}>
          {contents};
        </Section>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
