import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Brick from 'grommet/components/Brick';
import Bricks from 'grommet/components/Bricks';
import PdfIcon from 'grommet/components/icons/base/DocumentPdf';
import CursorIcon from 'grommet/components/icons/base/Cursor';

export default class Home extends Component {

  constructor (props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(event) {
    this.props.onClick(event.target.id);
  }

  render () {
    return (
      <Section>
        <Header direction="row" justify="between" large={true}
          pad={{horizontal: 'large'}}>
          <Title>Human-Computer Interaction Capstone Project</Title>
          <Box direction="row">
            <Title>Bryan Jacquot</Title>
            <Gravatar email={'jacquot@hpe.com'} />
          </Box>
        </Header>
        <Box pad={{horizontal:'large'}}>
          <Bricks>
            <Brick label="Interactive Prototype" onClick={this._onClick} key="prototype" colorIndex="brand" type="wide">
              <CursorIcon size="large" colorIndex="light-1" />
            </Brick>
            <Brick label="Proposal" onClick={this._onClick} id="proposal" colorIndex="neutral-1">
              <PdfIcon size="large" colorIndex="light-1" />
            </Brick>
            <Brick label="User Needs" onClick={this._onClick} id="user-needs" colorIndex="neutral-2">
              <PdfIcon size="large" colorIndex="light-1" />
            </Brick>
            <Brick label="Design" onClick={this._onClick} id="design" colorIndex="accent-1">
              <PdfIcon size="large" colorIndex="light-1" />
            </Brick>
            <Brick label="Prototype Description" onClick={this._onClick} id="prototype" colorIndex="grey-3">
              <PdfIcon size="large" colorIndex="light-1" />
            </Brick>
            <Brick label="Evaluation" onClick={this._onClick} id="evaluation" colorIndex="accent-2">
              <PdfIcon size="large" colorIndex="light-1" />
            </Brick>
            <Brick label="Presentation" onClick={this._onClick} id="presentation" colorIndex="ok">
              <PdfIcon size="large" colorIndex="light-1" />
            </Brick>
          </Bricks>
        </Box>
      </Section>
    );
  }
};
