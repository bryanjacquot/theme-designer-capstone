import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';

export default class Presentation extends Component {

  constructor() {
    super();
  }

  render () {
    return (
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
    );
  }
};




