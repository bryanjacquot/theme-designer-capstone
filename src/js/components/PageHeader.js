import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';

export default class PageHeader extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <Box direction="column" pad="none">
  	    <Box justify="end" direction="row" pad={{vertical: 'small', horizontal: 'none'}} responsive={false}>
  	      <Box pad={{ horizontal: 'small', vertical: 'small' }}>
  	        Bryan Jacquot
  	      </Box>
  	      <Gravatar email={'jacquot@hpe.com'} />
  	    </Box>
        <Header justify='between' align='start' responsive={true} size='medium' >
          <h1>HCI598 Capstone Project</h1>
        </Header>
      </Box>
    );
  }
};
