import React, { Component } from 'react';
import Section from 'grommet/components/Section';

export default class References extends Component {

  constructor() {
    super();
  }

  render () {
    return (
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
    );
  }
};
