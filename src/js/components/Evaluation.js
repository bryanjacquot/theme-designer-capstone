import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Meter from 'grommet/components/Meter';
import Chart from 'grommet/components/Chart';
import Pdf from 'grommet/components/icons/base/DocumentPdf';

export default class Evaluation extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <Section>
        <h2>Evaluation</h2>
        <p>
        A formative usability test was performed to determine if the
        Grommet Theme Designer is likely to be easy to use, provide
        high user satisfaction, and increase the likelihood of themes
        having accessible color palettes.
        </p>
        <p>
        The usability test was performed with six users from the primary
        stakeholder group.  Five of the test subjects are colleagues of
        the author and the remaining test subject is employed by another
        company.  A script was used to ensure consistent moderation of
        the usability test for all subjects. The usability tests were
        conducted online using Skype and were moderated.  Sessions were
        30 minutes in length.
        </p>
        <p>
        At the beginning of the test, subjects were given an initial survey.
        A link to the electronic survey in Google Forms was sent to
        participants through Skype.  After completing the initial online
        survey, subjects were given the link to the online InVision prototype
        through Skype.  They were asked to share their screen.  At that
        point, screen and audio recording began.  Subjects were then asked
        to design a theme using the online prototype.  Subjects were asked
        to use the “think aloud” protocol while completing the tasks.
        This method was used to communicate the thoughts and assumptions
        the user was making.  After completing the tasks using the online prototype
        a concluding survey was given.
        </p>
        <h3>Demographics</h3>
        The age range of participants is shown in Figure 1.
        <figure>
          <Meter important={0} series={[
            {"label": "25 to 34", "value": 33, "colorIndex": "graph-1"},
            {"label": "35 to 44", "value": 33, "colorIndex": "graph-2"},
            {"label": "45 to 54", "value": 33, "colorIndex": "graph-3"}
          ]} stacked={true} units="%" type="circle" legend={true}/>
          <figcaption>Figure 1. Age of usability test participants (n=6).</figcaption>
        </figure>
        <h3>Initial Accessibility Awareness</h3>
          <h4>When designing a theme, I take accessibility into account.</h4>
          <figure>
            <Chart series={[
              {
                "values": [[6, 5], [5, 2], [4, 4], [3, 3], [2, 5], [1, 3]],
                "colorIndex": "graph-1"
              }
            ]} type="bar" xAxis={{ "placement": "bottom",
            "data": [
              {"label": "U6", "value": 6},
              {"label": "u5", "value": 5},
              {"label": "U4", "value": 4},
              {"label": "U3", "value": 3},
              {"label": "U2", "value": 2},
              {"label": "U1", "value": 1}
            ]}} legend={{}} size="large" />
            <figcaption>Figure 1. Takes accessibility into account <i>(0 = strongly disagree, 5 = strongly agree)</i></figcaption>
          </figure>
          <h4>Of the themes I've created, most comply with international accessibility standards.</h4>
          <figure>
            <Chart series={[
              {
                "values": [[6, 4], [5, 3], [4, 4], [3, 2], [2, 5], [1, 3]],
                "colorIndex": "graph-1"
              }
            ]} type="bar" xAxis={{ "placement": "bottom",
            "data": [
              {"label": "U6", "value": 6},
              {"label": "u5", "value": 5},
              {"label": "U4", "value": 4},
              {"label": "U3", "value": 3},
              {"label": "U2", "value": 2},
              {"label": "U1", "value": 1}
            ]}} legend={{ "position": "overlay" }} size="large" />
            <figcaption>Figure 2. Would comply with standards <i>(0 = strongly disagree, 5 = strongly agree)</i></figcaption>
          </figure>
          <h3>Concluding Survey Results</h3>
          <h4>Net Promoter Score</h4>
          <p>
          The Net Promoter Score (NPS) for the Grommet Theme Designer was measured in the concluding survey
          of the usability study.  It was calculated to be 34.  The maximum value for NPS is 100 while
          the minimum is -100.  Net Promoter Score is a benchmark used across industries to measure
          customer loyalty.  It measures the extent to which customers and users will be either detractors,
          neutral, or promoters of your product, service, or brand.  The Grommet Theme Designer's score of
          34 is a favorable score.  For comparison, the “Software & Apps” industry has a Net Promoter Score
          of 19 (Net Promoter Benchmarking, 2016).  This score indicates when the solution is functional,
          there is strong likelihood users will promote it within their spheres of influence.
          </p>
          <h4>User Satisfaction</h4>
          <p>
          User satisfaction was measured in the concluding survey.  As shown in Figures 3 and 4, it was rated
          4 or higher on a Likert scale when participants were asked whether they were satisfied with the
          interface.  Two of the responses dropped to a 3 in Figure 4 when participants were asked whether the
          interface meets their needs.
          </p>
          <h4>How satisfied are you with the interface you just used?</h4>
          <figure>
            <Chart series={[
              {
                "values": [[6, 4], [5, 4], [4, 4], [3, 4], [2, 4], [1, 5]],
                "colorIndex": "graph-1"
              }
            ]} type="bar" xAxis={{ "placement": "bottom",
            "data": [
              {"label": "U6", "value": 6},
              {"label": "u5", "value": 5},
              {"label": "U4", "value": 4},
              {"label": "U3", "value": 3},
              {"label": "U2", "value": 2},
              {"label": "U1", "value": 1}
            ]}} legend={{ "position": "overlay" }} size="large" />
            <figcaption>Figure 3. Satisfied with the interface <i>(0 = very disatisfied, 5 = very satisfied)</i></figcaption>
          </figure>
          <h4>How well does this interface meet your needs?</h4>
          <figure>
            <Chart series={[
              {
                "values": [[6, 3], [5, 4], [4, 4], [3, 3], [2, 4], [1, 4]],
                "colorIndex": "graph-1"
              }
            ]} type="bar" xAxis={{ "placement": "bottom",
            "data": [
              {"label": "U6", "value": 6},
              {"label": "u5", "value": 5},
              {"label": "U4", "value": 4},
              {"label": "U3", "value": 3},
              {"label": "U2", "value": 2},
              {"label": "U1", "value": 1}
            ]}} legend={{ "position": "overlay" }} size="large" max={5} />
            <figcaption>Figure 4. Meets needs <i>(0 = not at all, 5 = completely)</i></figcaption>
          </figure>
          <h4>User Friendliness</h4>
          <p>
          User friendliness was measured in the concluding survey.  The
          responses were generally favorable with most responses being 3 or higher.  The average
          score across the 6 users and 9 questions was 3.7 out of 5.  The question regarding
          whether it was simple was the highest rated with an average of 4.3, while the the question
          regarding whether it was consistent was rated the lowest with an average of 2.8.
          </p>
          <h4>Concluding Accessibility Awareness</h4>
          <p>
          Accessibility awareness from the conluding survey are shown in Figure 5.  All six users
          rated their awareness of accessibility using the Grommet Theme Designer at either 4 or
          5, with an average of 4.5.
          </p>
          <h4>Compared to previous interfaces I've used, using this interface I would be more
          likely to take accessibility into account.</h4>
          <figure>
            <Chart series={[
              {
                "values": [[6, 4], [5, 5], [4, 5], [3, 5], [2, 4], [1, 4]],
                "colorIndex": "graph-1"
              }
            ]} type="bar" xAxis={{ "placement": "bottom",
            "data": [
              {"label": "U6", "value": 6},
              {"label": "u5", "value": 5},
              {"label": "U4", "value": 4},
              {"label": "U3", "value": 3},
              {"label": "U2", "value": 2},
              {"label": "U1", "value": 1}
            ]}} legend={{}} size="large" />
            <figcaption>Figure 5. Would take accessibility into account <i>(0 = strongly disagree, 5 = strongly agree)</i></figcaption>
          </figure>
          <h4>Compared to previous interfaces I've used, using this interface I would be
          more likely to create themes that comply with international accessibility
          standards.</h4>
          <figure>
            <Chart series={[
              {
                "values": [[6, 4], [5, 5], [4, 5], [3, 5], [2, 4], [1, 4]],
                "colorIndex": "graph-1"
              }
            ]} type="bar" xAxis={{ "placement": "bottom",
            "data": [
              {"label": "U6", "value": 6},
              {"label": "u5", "value": 5},
              {"label": "U4", "value": 4},
              {"label": "U3", "value": 3},
              {"label": "U2", "value": 2},
              {"label": "U1", "value": 1}
            ]}} legend={{ "position": "overlay" }} size="large" />
            <figcaption>Figure 6. Would comply with standards <i>(0 = strongly disagree, 5 = strongly agree)</i></figcaption>
          </figure>
          <h3>Discussion</h3>
          <p>
          The overall feedback from test subjects showed the Grommet Theme Designer has
          potential.  U1 stated, “This will be awesome” after completing the usability
          test (U1, 2016).  The accessibility features were the highlight.  While U4 was
          interacting with the prototype and encountered an accessibility recommendation
          they stated, “This type of feedback is awesome, man.  Instant feedback that can
          guide selection of colors is great" (U4, 2016).  U3 was even more enthusiastic,
          saying, “This would be insanely awesome.”  U3 went on to say, “This is definitely
          something new” (U3, 2016).  U2 commented they “love” this feature (U2, 2016).
          </p>
          <p>
          However, the the prototype had areas that need improvement.  U1 commented,
          “I’m confused by the typical vision menu.  I don’t understand all those terms”
          (U1, 2016).  U2 suggested a single page design would be more effective.  “A single
          page with a long scroll would be more effective. Then it is all inline and you
          don’t have to worry about settings in two places and it would provide more
          breathing room” (U2, 2016).  U3 also struggled with the divided nature of the
          controls between the left panel and the body of the page.  "I didn’t know the
          color was interactive.  The left side was where all the interaction was happening”
          (U3, 2016).  Finally, U4 also struggled with the interaction differences between
          the left and right side.  U4 stated, “The [left] side panel was pretty clear, but
          will it save the colors?  By having controls only in that panel, I’m not sure I
          was saving colors too” (U4, 2016).
          </p>
          <h3>Summary</h3>
          <p>
          The evaluation of Grommet Theme designer provided evidence that it was was easy to
          use, it provided high user satisfaction, and it increased the likelihood that
          themes will be designed for accessibility.  There are significant issues which
          must be resolved before implementing the design, but the user testing demonstrated
          the potential of the Grommet Theme Designer.
          </p>
        <Anchor icon={<Pdf/>} href="https://github.com/bryanjacquot/theme-designer-capstone/raw/master/docs/M5-JacquotBryan.pdf" label="Evaluation Results" primary={true} />
      </Section>
    );
  }
};
