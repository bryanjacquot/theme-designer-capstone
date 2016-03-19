import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';

export default class Evaluation extends Component {

  constructor() {
    super();
  }

  render () {
    return (
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
    );
  }
};
