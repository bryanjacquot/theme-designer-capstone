import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Pdf from 'grommet/components/icons/base/DocumentPdf';

export default class Prototype extends Component {

  constructor() {
    super();
  }

  render () {
    return (
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
    	  <Anchor href="https://invis.io/ZG6CFJX69" label="Online Prototype" primary={true} target="_blank" />
        <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M4-JacquotBryan-Prototype.pdf" label="Offline Prototype" primary={true} />
    	  <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M4-JacquotBryan.pdf" label="Prototype Description" primary={true} />
    	</Section>
    );
  }
};
