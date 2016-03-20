import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Pdf from 'grommet/components/icons/base/DocumentPdf';

export default class UserNeeds extends Component {

  constructor() {
    super();
  }

  render () {
    return (
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
        <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M2-JacquotBryan.pdf" label="User Needs Document" primary={true} />
      </Section>
    );
  }
};
