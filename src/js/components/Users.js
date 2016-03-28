import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Meter from 'grommet/components/Meter';
import Pdf from 'grommet/components/icons/base/DocumentPdf';

export default class Users extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <Section>
        <a name="users" />
        <h2>Users</h2>
        <p>
        The <b>primary stakeholders</b> of the Grommet Theme Designer are
        designers who create themes for websites and applications.  For
        the scope of this project, this user group will be further subdivided
        into designers who use the OS X operating system and the Sketch
        design tool.  My initial survey indicated 60% of the primary
        stakeholders use OS X as their primary operating system as
        shown in Figure 1.
        </p>
        <figure>
          <Meter important={0} series={[
            {"label": "OS X", "value": 60, "colorIndex": "graph-1"},
            {"label": "Windows", "value": 20, "colorIndex": "graph-2"},
            {"label": "iOS", "value": 20, "colorIndex": "graph-3"}
          ]} stacked={true} units="%" type="circle" legend={true}/>
          <figcaption>Figure 1. Primary operating system used by designers (n=5).</figcaption>
        </figure>
        <p>
        Primary stakeholders will generally have formal training in graphic
        design, web development, or related field.  Those surveyed described
        their occupation as either “Software and web development” or “Arts,
        design, and user experience” as shown in Figure 2.
        </p>
        <figure>
          <Meter important={0} series={[
            {"label": "Arts, design, and user experience", "value": 60, "colorIndex": "graph-1"},
            {"label": "Software and web development", "value": 40, "colorIndex": "graph-2"}
          ]} stacked={true} units="%" type="circle" legend={true}/>
          <figcaption>Figure 2. Occupations of primary stakeholders (n=5).</figcaption>
        </figure>
        <p>
        The <b>secondary stakeholders</b> of this system are website and
        application developers who receive the theme output by the system.
        </p>
        <p>
        There are two groups of <b>tertiary stakeholders</b> of this system who
        have no direct involvement with the project but will be affected by its
        outcome.  The first are employers who have designers on staff who create
        custom themes as part of their job responsibilities.  The second group of
        tertiary stakeholders is the users of websites and applications designed
        with the theme designer.
        </p>
        <h3>User Needs</h3>
        <p>
        There were four key unmet user needs I uncovered in my research.  First, of
        the designers I interviewed, <i>none</i> of them had taken accessibility standards
        into account when designing themes.  “I didn’t start doing accessibility
        stuff until started working here [Hewlett Packard Enterprise]” (PS3, 2016).
        </p>
        <p>
        The second unmet user need I uncovered was the lack of tooling and control for
        element styling.  There is a strong tendency for designers to defer element
        styling to developers.  PS2 described the, “major influence [on element styling]
        is from technology.  In fact, 80-90% of element styling is driven by
        technology stack used by developers.”  PS1 described element styling as,
        “Chaotic and hap-hazard; we couldn’t keep up with what dev was doing”
        (PS1, 2016).
        </p>
        <p>
        Third, the significance of the review task emerged from my research. This
        task is critical because it enables collaboration and feedback from
        stakeholders and supports iterative design and refinement.  I uncovered
        designers often spend significant time applying colors, fonts, and element
        designs in full pages so they can see their designs in context.  However,
        the manual nature of this task limits the designer’s ability to quickly
        explore variations of the theme.
        </p>
        <p>
        Fourth, there is a user need to improve the handoff between the designer and
        developer.  The handoff involves delivery of assets in a format familiar
        to designers such as Adobe Photoshop or Illustrator, or Sketch.  However,
        this format is not directly usable by developers; it requires analysis
        and interpretation which is time consuming and lacks precision.  Even
        using a platform such as Axure which provides interactive HTML prototypes
        requires interpretation by developers because HTML, CSS, and JavaScript
        in Axure is not designed to be used by developers beyond the visual and
        interaction design.
        </p>
        <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/raw/master/docs/M2-JacquotBryan.pdf" label="User Needs Document" primary={true} />
        <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/raw/master/docs/M2-JacquotBryan-SurveyRawData.pdf" label="User Survey Raw Data" primary={true} />
      </Section>
    );
  }
};
