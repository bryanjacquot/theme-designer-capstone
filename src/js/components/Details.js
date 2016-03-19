import React, { Component } from 'react';
import GrommetLogo from 'grommet/components/icons/Grommet';
import Gravatar from 'react-gravatar';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import PageFooter from './PageFooter';

export default class Details extends Component {

  constructor (props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(section) {
    this.props.onClick();
  }

  render () {

    return (
      <Split flex="right" fixed={true} onResponsive={this._onResponsive}>
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
        <Article>
          <Article pad={{ vertical: 'small', horizontal: 'small' }}>
            <Box justify="end" direction="row" pad={{vertical: 'small', horizontal: 'none'}} responsive={false}>
              <Box pad={{ horizontal: 'small', vertical: 'small' }}>
                Bryan Jacquot
              </Box>
              <Gravatar email={'jacquot@hpe.com'} />
            </Box>
            <Header justify='between' align='start' responsive={true} size='medium' >
              <h1>HCI598 Capstone Project</h1>
            </Header>
            <Section>
              <a name="proposal" />
              <h2>Proposal</h2>
              <p>
                The initial prototype I began for the M4 deliverable was high-fidelity and fully
                interactive in HTML.  I had the skeleton of the prototype in place and was adding
                the ability for users to customize the theme.  At that point, I encountered a
                technical hurdle that is solvable, but it was not realistic for me to overcome
                within the timeline of this project.  As a result, I changed my prototyping strategy
                and went to a lower-fidelity prototyping technique.  This allowed me to deliver the
                prototype on time with ample content to collect feedback on the design.
              </p>
              <Anchor href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M1-JacquotBryan.pdf" label="Proposal Document (pdf)" primary={true} />
            </Section>
            <Section>
              <a name="user-needs" />
              <h2>User Needs</h2>
              <p>
                I created the Grommet Theme Designer low-fidelity prototype using the Balsamiq
                digital prototyping tool (https://balsamiq.com/).  Balsamiq is a tool I’ve used
                for several years, and I’m familiar with its interface and capabilities.  I chose
                  a lower-fidelity prototype because of the challenges I encountered with a
                high-fidelity prototype.  I have also learned that when I create high fidelity
                prototypes, I tend to spend inordinate amounts of time fine tuning the system in
                ways that are not necessary for gathering early feedback.  In addition, as Walker
                et al’s research showed, “low- and high-fidelity prototypes are equally good at
                uncovering usability issues” and “designers should choose whichever medium and
                level of fidelity suit their practical needs and design goals.” (Walker, 2002, p661).
              </p>
              <Anchor href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M2-JacquotBryan.pdf" label="User Needs Document (pdf)" primary={true} />
            </Section>
            <Section>
              <a name="design" />
              <h2>Design</h2>
              <p>
                The other benefit of using Balsamiq is its capability to create interactive PDF
                files.  This allows users to interact with the system offline, and allows me to
                submit the prototype both online and offline formats.
              </p>
              <Anchor href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M3-JacquotBryan.pdf" label="Design Document (pdf)" primary={true} />
            </Section>
            <Section>
              <a name="prototype" />
              <h2>Prototype</h2>
              <p>
                Once the prototypes were ready for gathering feedback, I uploaded them to the
                InVision online prototyping platform (http://www.invisionapp.com/).  InVision
                allows prototypes to be linked together with hotspots turning what would otherwise
                be static mockups into an interactive experience.  This allows subjects to interact
                with the system in a way that feels somewhat realistic.  However, there are
                limitations with this approach.  For example, on the screen where users select
                colors, they can only pick from a few colors as prototyping screens for every
                possible color is not practical.
              </p>
              <Anchor href="https://invis.io/ZG6CFJX69" label="Interactive Prototype" primary={true} target="_blank" />
              <Anchor href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M4-JacquotBryan.pdf" label="Prototype Document (pdf)" primary={true} />
            </Section>
            <Section>
              <a name="evaluation" />
              <h2>Evaluation</h2>
              <p>
                I chose to create a digital prototype because at least half of my usability
                test subjects will be remote.  Using InVision will allow them to interact with
                the prototype from anywhere in the world. While I appreciate the value of paper
                prototypes, I find the most value in paper prototypes when I can interact with
                the test subject in person.
              </p>
              <Anchor href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M5-JacquotBryan.pdf" label="Evaluation Results (pdf)" primary={true} />
            </Section>
            <Section>
              <a name="presentation" />
              <h2>Presentation</h2>
              <p>
                At this phase, the prototype’s purpose is for formative evaluation to “improve
                the design” of the system (Dix, 2004).  I’m using the prototype to improve the
                design before it is implemented.  According to Dix, this type of prototype would
                be considered “throw-away” since the prototype is used to gather feedback and
                improve the design, but the actual content of the prototype will not be used beyond
                the usability testing.
              </p>
              <Anchor href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M6-JacquotBryan.pdf" label="Presentation Slides (pdf)" primary={true} />
            </Section>
            <Section>
              <a name="references" />
              <h2>References</h2>
              <p>
                At this phase, the prototype’s purpose is for formative evaluation to “improve
                the design” of the system (Dix, 2004).  I’m using the prototype to improve the
                design before it is implemented.  According to Dix, this type of prototype would
                be considered “throw-away” since the prototype is used to gather feedback and
                improve the design, but the actual content of the prototype will not be used beyond
                the usability testing.
              </p>
            </Section>
          </Article>
          <PageFooter />
        </Article>
      </Split>
    );
  }
};
