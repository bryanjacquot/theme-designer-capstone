import React, { Component } from 'react';
import Split from 'grommet/components/Split';
import Article from 'grommet/components/Article';
import SiteMenu from './SiteMenu';
import PageHeader from './PageHeader';
import Overview from './Overview';
import Users from './Users';
import Design from './Design';
import Prototype from './Prototype';
import Evaluation from './Evaluation';
import Presentation from './Presentation';
import References from './References';
import PageFooter from './PageFooter';

export default class Details extends Component {

  constructor () {
    super();
    this._onSidebarClose = this._onSidebarClose.bind(this);
    this._onSidebarOpen = this._onSidebarOpen.bind(this);
    this._onMenuClick = this._onMenuClick.bind(this);
    this._onPopState = this._onPopState.bind(this);

    let page = window.location.pathname;
    if ( ! page ) {
      page = "overview";
    } else {
      // Get just the trailing location name
      page = page.split(/[\\/]/).pop();
    }

    this.state = {
      enableSidebar: true,
      page: page
    };
  }

  componentDidMount () {
    window.addEventListener('popstate', this._onPopState);
  }

  componentWillUnmount () {
    window.removeEventListener('popstate', this._onPopState);
  }

  _onPopState (event) {
    this.setState({page: event.state.page});
  }

  _onSidebarOpen () {
    this.setState({enableSidebar: true});
  }

  _onSidebarClose () {
    this.setState({enableSidebar: false});
  }

  _onMenuClick (page) {
    history.pushState({page: page}, page + " - HCI598 Capstone Project", "/" + page);
    this.setState({page: page});
  }

  render () {

    let sidebar = null;
    if ( this.state.enableSidebar ) {
      sidebar = ( <SiteMenu page={this.state.page}
                  onClose={this._onSidebarClose}
                  onClick={this._onMenuClick}/> );
    }

    let page = null;
    if ( this.state.page == "users" ) {
      page = <Users />;
    } else if ( this.state.page == "design" ) {
      page = <Design />;
    } else if ( this.state.page == "prototype" ) {
      page = <Prototype />;
    } else if ( this.state.page == "evaluation" ) {
      page = <Evaluation />;
    } else if ( this.state.page == "presentation" ) {
      page = <Presentation />;
    } else if ( this.state.page == "references" ) {
      page = <References />;
    } else {
      page = <Overview />;
    }

    return (
      <Split flex="right" fixed={true} onResponsive={this._onResponsive}>
        {sidebar}
        <Article>
          <Article pad={{ vertical: 'small', horizontal: 'medium' }}>
            <PageHeader hideTitle={this.state.enableSidebar} _onSidebarOpen={this._onSidebarOpen}/>
            {page}
          </Article>
          <PageFooter />
        </Article>
      </Split>
    );
  }
};
