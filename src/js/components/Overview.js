import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Pdf from 'grommet/components/icons/base/DocumentPdf';

export default class Overview extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <Section>
        <h2>Overview</h2>
        <p>
        The Grommet Theme Designer is a web-based application which
        enables designers, the primary stakeholders, to create themes
        for websites and web-based applications.  Themes created with
        the Grommet Theme Designer will cover the spectrum of web
        design needs, including colors, fonts, element style (button,
        checkbox, etc.), and icon style (line width and end caps).
        </p>
        <p>
        The theme designer will ensure the theme meets certain accessibility
        standards with notifications of inadequate contrast between colors
        for users with color deficiency (WCAG 2008).  This is a significant
        capability because according to Dix (2004), approximately 8% of
        males and 1% of females suffer from colorblindness.  These figures
        do not include users who rely on assistive technologies such as screen
        readers.  The importance of this capability cannot be understated
        as none of the designers initially interviewed for this project had
        taken accessibility into account when designing themes.
        </p>
        <p>
        When the designer is satisfied with the theme, it can be imported
        into Sketch.  A new Sketch plugin will customize the&nbsp;
        <a href="https://github.com/grommet/grommet-design/raw/master/grommet/grommet-sticker-sheet-apps-general-0-3.sketch">
        Grommet Sticker Sheet</a> with the theme’s settings, which makes
        it easy for designers to begin designing their website or application.
        </p>
        <p>
        Finally, the theme designer streamlines the handoff to developers
        by providing developers with the customized theme for the&nbsp;
        <a href="http://grommet.io">Grommet</a> web development library.
        This enables developers to efficiently implement the application as designed.
        </p>
        <p>
        This project was authored by Bryan Jacquot as part of a Master of Science
        degree in <a href="http://www.vrac.iastate.edu/hci/">Human-Computer Interaction</a>.&nbsp;
        <a href="https://courses.elo.iastate.edu/HCI/598/XE/2016/spring/overview">HCI 598 XE</a>&nbsp;
        <i>HCI Design, Implementation and Implications</i> is the capstone course for the online degree program.
        </p>
        <p>
        <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M1-JacquotBryan.pdf" label="Proposal Document" primary={true} />
        </p>
      </Section>
    );
  }
};
