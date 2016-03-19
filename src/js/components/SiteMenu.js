import React, { Component } from 'react';
import Sidebar from'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import GrommetLogo from 'grommet/components/icons/Grommet';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

export default class Details extends Component {

  constructor () {
    super();
  }

  render () {
    return (
      <Sidebar size="medium" primary={true} separator="right">
        <Header justify="between" size="large" pad={{horizontal: 'medium'}} onClick={this._onClick}>
          <Box direction="row" pad={{ vertical: 'small', horizontal: 'none' }}>
            <GrommetLogo />
            <Box pad={{ vertical: 'small', horizontal: 'small' }}>
              Theme Designer
            </Box>
          </Box>
        </Header>
        <Menu direction={this.props.direction} align="start" justify="between" primary={true} pad={{ vertical: 'small', horizontal: 'none' }}>
          <Anchor href="#proposal">Proposal</Anchor>
          <Anchor href="#user-needs">User Needs</Anchor>
          <Anchor href="#design">Design</Anchor>
          <Anchor href="#prototype">Prototype</Anchor>
          <Anchor href="#evaluation">Evaluation</Anchor>
          <Anchor href="#presentation">Presentation</Anchor>
          <Anchor href="#references">References</Anchor>
        </Menu>
      </Sidebar>
    );
  }
};
