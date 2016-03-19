import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';

export default class Proposal extends Component {

  constructor() {
    super();
  }

  render () {
    return (
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
    );
  }
};
