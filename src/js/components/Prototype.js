import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Pdf from 'grommet/components/icons/base/DocumentPdf';

export default class Prototype extends Component {

  constructor() {
    super();
  }

  render () {
    return (
    	<Section>
    	  <h2>Prototype</h2>
    	  <p>
        I created the Grommet Theme Designer low-fidelity prototype using the
        <a href="https://balsamiq.com">Balsamiq</a> digital prototyping tool.
        Balsamiq is a tool I’ve used for several years, and I’m familiar with
        its interface and capabilities.  As Walker et al’s research showed,
        “low- and high-fidelity prototypes are equally good at uncovering
        usability issues” and “designers should choose whichever medium and
        level of fidelity suit their practical needs and design goals”
        (Walker, 2002, p. 661).
        </p>
        <p>
        Once the prototypes were ready for gathering feedback, I uploaded
        them to the <a href="http://www.invisionapp.com/">InVision</a> online
        prototyping platform.  InVision allows prototypes to be linked
        together with hotspots turning what would otherwise be static
        mockups into an interactive experience.  This allows subjects to
        interact with the system in a way that feels somewhat realistic.
        However, there are limitations with this approach.  For example, on
        the screen where users select colors, they can only pick from a few
        colors as prototyping screens for every possible color is not practical.
        </p>
        <p>
        The online prototype embedded below is fully interactive.  If you'd like
        to interact with the full size prototype, the link is provided.
        </p>
        <div className="iframe-wrap">
          <iframe src="//invis.io/8D6CFJTUQ" frameBorder="0" allowFullScreen></iframe>
        </div>
        <Box pad={{ vertical: 'medium', horizontal: 'none' }}>
    	    <Anchor href="https://invis.io/ZG6CFJX69" label="Online Prototype" primary={true} target="_blank" />
          <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M4-JacquotBryan-Prototype.pdf" label="Offline Prototype" primary={true} />
    	    <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M4-JacquotBryan.pdf" label="Prototype Description" primary={true} />
        </Box>
    	</Section>
    );
  }
};
