import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Brick from 'grommet/components/Brick';
import Bricks from 'grommet/components/Bricks';
import Footer from 'grommet/components/Footer';
import PdfIcon from 'grommet/components/icons/base/DocumentPdf';
import CursorIcon from 'grommet/components/icons/base/Cursor';

export default class ThemeDesignerCapstoneDocs extends Component {

  constructor () {
    super();
  }

  render () {

    return (
      <App>
        <Section pad="none" full={true}>
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
              <Brick label="Interactive Prototype" href="https://invis.io/ZG6CFJX69" colorIndex="brand" type="wide">
                <CursorIcon size="large" colorIndex="light-1" />
              </Brick>
              <Brick label="Proposal" href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M1-JacquotBryan.pdf" colorIndex="neutral-1">
                <PdfIcon size="large" colorIndex="light-1" />
              </Brick>
              <Brick label="User Needs" href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M2-JacquotBryan.pdf" colorIndex="neutral-2">
                <PdfIcon size="large" colorIndex="light-1" />
              </Brick>
              <Brick label="Design" href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M3-JacquotBryan.pdf" colorIndex="accent-1">
                <PdfIcon size="large" colorIndex="light-1" />
              </Brick>
              <Brick label="Prototype Description" href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M4-JacquotBryan.pdf" colorIndex="grey-3">
                <PdfIcon size="large" colorIndex="light-1" />
              </Brick>
              <Brick label="Evaluation" href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M5-JacquotBryan.pdf" colorIndex="accent-2">
                <PdfIcon size="large" colorIndex="light-1" />
              </Brick>
              <Brick label="Presentation" href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M7-JacquotBryan.pdf" colorIndex="ok">
                <PdfIcon size="large" colorIndex="light-1" />
              </Brick>
            </Bricks>
          </Box>
          <Footer float={true} colorIndex="grey-3-a" pad={{vertical: "small", horizontal: "large"}}>
            <div>
              Built with <a href="http://grommet.io">Grommet</a> and licensed under the <a href="http://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons Attribution 4.0 International License.</a>
            </div>
          </Footer>
        </Section>
      </App>
    );
  }
};
