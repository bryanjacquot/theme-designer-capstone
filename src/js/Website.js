// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

import React from 'react';

import App from 'grommet/components/App';
import Section from 'grommet/components/Section';
import Content from './components/Content';

const Website = () => {
  return (
    <App>
      <Section pad="none" full={true}>
        <Content />
      </Section>
    </App>
  );
};

export default Website;
module.exports = Website;
