import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Pdf from 'grommet/components/icons/base/DocumentPdf';

export default class Presentation extends Component {

  constructor() {
    super();
  }

  render () {
    return (
			<Section>
			  <h2>Presentation</h2>
        <p>
			  The following presentation summarizes the Grommet Theme Designer project.
        It was presented for the oral defense of my M.S. in Human-Computer
        Interaction degree.  The revised mockups are also provided.
        </p>
			  <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/raw/master/docs/M7-JacquotBryan.pdf" label="Presentation Slides" primary={true} />
        <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/raw/master/docs/M7-JacquotBryan-Mockups.pdf" label="Revised Mockups" primary={true} />
			</Section>
    );
  }
};




