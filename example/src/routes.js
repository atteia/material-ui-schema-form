/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Route } from 'react-router-dom'

import PageWrapper from './components/page-wrapper';

import Home from './pages/home';

export default () => (
  <PageWrapper>
    <Route path="/" component={Home}/>
  </PageWrapper>
);
