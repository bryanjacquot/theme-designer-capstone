import React, { Component } from 'react';
import Footer from 'grommet/components/Footer';

export default class PageFooter extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <Footer colorIndex="grey-3-a" pad={{vertical: "small", horizontal: "large"}}>
        <div>
          Built with <a href="http://grommet.io">Grommet</a> and licensed under the <a href="http://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons Attribution 4.0 International License.</a>
        </div>
      </Footer>
    );
  }
};
