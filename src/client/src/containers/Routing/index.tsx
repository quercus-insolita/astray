import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import LoginPage from '../../pages/Authentication/pages/LoginPage';

const Routing: React.FC = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact={true} path="/" render={() => <Home />} />
      <Route path="/login" render={() => <LoginPage />} />
    </Switch>
  );
};

export default Routing;
