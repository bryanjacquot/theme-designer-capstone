import React, { Component } from 'react';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Brick from 'grommet/components/Brick';
import Bricks from 'grommet/components/Bricks';
import Footer from 'grommet/components/Footer';

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
          </Header>
          <Box pad="large">
            <Bricks>
              <Brick label="Prototype" href="https://invis.io/ZG6CFJX69" colorIndex="neutral-3" type="large" />
              <Brick label="Proposal" href="./docs/M1-BryanJacquot.pdf" colorIndex="neutral-1" texture="img/m1-texture.png"/>
              <Brick label="User Needs" href="./docs/Ms-BryanJacquot.pdf" colorIndex="neutral-2" />
              <Brick label="Design" href="./docs/Ms-BryanJacquot.pdf" colorIndex="accent-1" />
              <Brick label="Evaluation" href="./docs/Ms-BryanJacquot.pdf" colorIndex="neutral-4" />
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
