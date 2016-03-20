import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Pdf from 'grommet/components/icons/base/DocumentPdf';

export default class Design extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <Section>
        <a name="design" />
        <h2>Design</h2>
        <p>
          The other benefit of using Balsamiq is its capability to create interactive PDF
          files.  This allows users to interact with the system offline, and allows me to
          submit the prototype both online and offline formats.
        </p>
        <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M3-JacquotBryan.pdf" label="Design Document" primary={true} />
      </Section>
    );
  }
};
