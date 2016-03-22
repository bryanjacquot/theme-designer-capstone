import React, { Component } from 'react';
import Sidebar from'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import GrommetLogo from 'grommet/components/icons/Grommet';
import CloseIcon from 'grommet/components/icons/base/Close';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

const CONTENTS = [{
  label: 'Overview',
  id: 'overview'
},{
  label: 'Users',
  id: 'users'
},{
  label: 'Design',
  id: 'design'
},{
  label: 'Prototype',
  id: 'prototype'
},{
  label: 'Evaluation',
  id: 'evaluation'
},{
  label: 'Presentation',
  id: 'presentation'
},{
  label: 'References',
  id: 'references'
}];

export default class Details extends Component {

  constructor (props) {
    super(props);
    this._onClose = this._onClose.bind(this);
    this._onClick = this._onClick.bind(this);
    this._renderMenuItems = this._renderMenuItems.bind(this);
  }

  _onClose() {
    this.props.onClose();
  }

  _onClick(event) {
    this.props.onClick(event.currentTarget.id);
  }

  _renderMenuItems (contents) {
    let items = contents.map(function (content) {
      let active = "";
      let item;
      if ( this.props.page == content.id ) {
        active = "active";
      }
      item = (<Anchor id={content.id}
                onClick={this._onClick}
                className={active} label={content.label}/>);
      return item;
    }.bind(this));

    return items;
  }

  render () {
    let menuItems = (
      this._renderMenuItems(CONTENTS)
    );

    return (
      <Sidebar size="medium" primary={true} separator="right">
        <Header justify="between" size="large" pad={{horizontal: 'medium', vertical: 'small'}} onClick={this._onClick}>
          <Box direction="row" pad={{ vertical: 'small', horizontal: 'none' }}>
            <GrommetLogo />
            <Box pad={{ vertical: 'small', horizontal: 'small' }}>
              Theme Designer
            </Box>
            <Menu responsive={false}>
              <Anchor href="#" icon={<CloseIcon />} onClick={this._onClose}
                a11yTitle="Close Menu" />
            </Menu>
          </Box>
        </Header>
        <Menu direction={this.props.direction} align="start" justify="between" primary={true} pad={{ vertical: 'small', horizontal: 'none' }}>
        {menuItems}
        </Menu>
      </Sidebar>
    );
  }
};
