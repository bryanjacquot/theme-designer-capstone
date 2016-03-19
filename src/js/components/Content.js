import React, { Component } from 'react';
import Split from 'grommet/components/Split';
import Article from 'grommet/components/Article';
import SiteMenu from './SiteMenu';
import PageHeader from './PageHeader';
import Proposal from './Proposal';
import UserNeeds from './UserNeeds';
import Design from './Design';
import Prototype from './Prototype';
import Evaluation from './Evaluation';
import Presentation from './Presentation';
import References from './References';
import PageFooter from './PageFooter';

export default class Details extends Component {

  constructor () {
    super();
  }

  render () {
    return (
      <Split flex="right" fixed={true} onResponsive={this._onResponsive}>
        <SiteMenu />
        <Article>
          <Article pad={{ vertical: 'small', horizontal: 'small' }}>
            <PageHeader />
            <Proposal />
            <UserNeeds />
            <Design />
            <Prototype />
            <Evaluation />
            <Presentation />
            <References />
          </Article>
          <PageFooter />
        </Article>
      </Split>
    );
  }
};
