import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Carousel from 'grommet/components/Carousel';
import Pdf from 'grommet/components/icons/base/DocumentPdf';

export default class Design extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <Section>
        <h2>Design</h2>
        <p>
        A mockup of the first screen of the Grommet Theme Designer
        is shown beow.  The page is designed to be welcoming and simple.
        An intentional design element is the pre-populated settings
        as an observable starting point.  “Observability allows the
        user to evaluate the internal state of the system by means
        of its perceivable representation at the interface” (Dix, 2004).
        Dix goes on to say defaults can be either static or dynamic.
        The Grommet Theme Designer will use dynamic default colors
        that are in harmony so the first page gives an observable and
        pleasing first impression.  As Burchett (2002, p. 28) describes,
        “Colors seen together to produce a pleasing affective response
        are said to be in harmony.”
        </p>
        <Carousel autoplay={true}>
          <img src="img/m3-a-home.png" />
          <img src="img/m3-b-primary-color.png" />
          <img src="img/m3-c-element-style.png" />
          <img src="img/m3-d-primary-font.png" />
          <img src="img/m3-e-sample.png" />
          <img src="img/m3-f-develop.png" />
          <img src="img/m3-g-sketch.png" />
          <img src="img/m3-h-sketch-done.png" />
          <img src="img/m3-i-mobile.png" />
        </Carousel>
        <h3>User Stories</h3>
        <p>
        The following user stories describe the capabilities which will be
        offered by the Grommet Theme Designer.
        </p>
        <ol className="upper-roman">
          <li>Foundation
            <ol className="lower-latin">
              <li>As a designer, I need to efficiently create a theme for
              a web application.</li>
              <li>As a designer, I need to preview a sample application
              using my theme.</li>
              <li>As a designer, I need to share my theme with stakeholders
              and developers.</li>
              <li>As a designer, I need to download my theme for use in Sketch.</li>
              <li>As a developer, I need to preview the theme and provide
              feedback to the designer.</li>
              <li>f.  As a developer, I need to download the theme for use in the
              Grommet application development platform.</li>
            </ol>
          </li>
          <li>Color
            <ol className="lower-latin">
              <li>As a designer, I need a primary color to be suggested.</li>
              <li>As a designer, I need to specify a primary color based on my
              customer’s brand.</li>
              <li>As a designer, I need to fine-tune suggested primary and
              secondary colors.</li>
              <li>As a designer, I want to be notified when colors lack
              differentiation by users with color deficient vision.</li>
              <li>As a designer, I want to be notified when colors lack
              adequate contrast to meet accessibility standards when text is
              placed on top of colors in my palette (e.g. in buttons).</li>
            </ol>
          </li>
          <li>Fonts
            <ol className="lower-latin">
              <li>As a designer, I need to select a font family.</li>
              <li>As a designer, I need to browse fonts for use in my application.</li>
              <li>As a designer, I need to preview and fine tune the typographic scale.</li>
            </ol>
          </li>
          <li>Element style
            <ol className="lower-latin">
              <li>As a designer, I need to adjust the corner radius of buttons and controls.</li>
              <li>As a designer, I need to adjust the depth of controls to provide
              either a flat or 3d appearance.</li>
              <li>As a designer, I need to set the line weight within icons.</li>
              <li>As a designer, I need to set the line-end style within icons.</li>
            </ol>
          </li>
          <li>Design tool
            <ol className="lower-latin">
              <li>As a designer, I need to import my theme into Sketch so I can
              design my application using my theme without manual entry of my
              theme settings.</li>
            </ol>
          </li>
        </ol>
        <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/blob/master/docs/M3-JacquotBryan.pdf" label="Design Document" primary={true} />
      </Section>
    );
  }
};
