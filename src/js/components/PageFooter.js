import React, { Component } from 'react';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Twitter from 'grommet/components/icons/base/SocialTwitter';
import LinkedIn from 'grommet/components/icons/base/SocialLinkedin';
import Email from 'grommet/components/icons/base/SocialEmail';

export default class PageFooter extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <Footer colorIndex="grey-3-a" pad={{vertical: "small", horizontal: "medium"}}>
        <Box direction="row" justify="between">
          <div>
            Built with <a href="http://grommet.io">Grommet</a> and licensed under the <a href="http://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons Attribution 4.0 International License.</a>
          </div>
          <Box direction="row" pad={{horizontal: "small", vertical: "none"}}>
            <Box pad={{horizontal: "small"}} onClick={this._onTwitter}>
              <Anchor icon={<Twitter />} href="https://twitter.com/intent/follow?screen_name=bryanjacquot" />
            </Box>
            <Box pad={{horizontal: "small"}} onClick={this._onLinkedIn}>
              <Anchor icon={<LinkedIn />} href="https://www.linkedin.com/in/bryanjacquot" />
            </Box>
            <Box pad={{horizontal: "small"}} onClick={this._onEmail}>
              <Anchor icon={<Email />} href="mailto:jacquot@iastate.edu?Subject=HCI%20598%20Capstone%20Project" />
            </Box>
          </Box>
        </Box>
      </Footer>
    );
  }
};
