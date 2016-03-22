import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import GrommetLogo from 'grommet/components/icons/Grommet';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';

export default class PageHeader extends Component {

  constructor(props) {
    super(props);
    this._onClickTitle = this._onClickTitle.bind(this);
  }

  _onClickTitle () {
    this.props._onSidebarOpen();
  }

  render () {
    let title=null;

    if ( ! this.props.hideTitle ) {
      title = (
        <Title onClick={this._onClickTitle} a11yTitle="Open Menu">
          <GrommetLogo />
          Theme Designer
        </Title>
      );
    } else {
      title = (<h1>HCI598 Capstone Project</h1>);
    }

    return (
      <Box direction="column" pad="none">
  	    <Box justify="between" direction="row" pad={{vertical: 'small', horizontal: 'none'}} responsive={false}>
          {title}
  	      <Box direction="row" pad={{ horizontal: 'small', vertical: 'none' }}>
            <Box pad={{ horizontal: 'small', vertical: 'small' }}>
  	          Bryan Jacquot
            </Box>
            <Gravatar email={'jacquot@hpe.com'} />
  	      </Box>
  	    </Box>
      </Box>
    );
  }
};
