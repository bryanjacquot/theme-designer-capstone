import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import TBD from 'grommet/components/TBD';
import Pdf from 'grommet/components/icons/base/DocumentPdf';

export default class Presentation extends Component {

  constructor() {
    super();
  }

  render () {
    return (
			<Section>
			  <h2>Presentation</h2>
			  <TBD />
			  <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/raw/master/docs/M6-JacquotBryan.pdf" label="Presentation Slides" primary={true} />
			</Section>
    );
  }
};




