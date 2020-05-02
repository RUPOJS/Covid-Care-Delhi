import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NotFoundPage from './components/NotFound/NotFound';
import CovidDelInfo from './components/CovidDelInfo';
import CovidDelData from './components/CovidDelData';
import Wrapper from './views/Wrapper/Wrapper';
import importCss from './utils/importCss';

export const loadRoute = {
  LandingPage: () => Promise.all([
    import('./views/LandingPage/LandingPage' /* webpackChunkName: 'LandingPage' */),
    importCss('LandingPage'),
  ]),
};

export default (
  <Route path="/" component={Wrapper}>

    <IndexRoute
      name="LandingPage"
      getComponent={(_, cb) => loadRoute.LandingPage()
        .then(([module]) => cb(null, module.default))}
    />

    <Route path="/covid-delhi-info" component={CovidDelInfo} />
    <Route path="/covid-delhi-data" component={CovidDelData} />
    <Route path="*" component={NotFoundPage} />

  </Route>
);
