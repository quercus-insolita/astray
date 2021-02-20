import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import LoginPage from '../../pages/Authentication/pages/LoginPage';
import RegisterPage from '../../pages/Authentication/pages/RegisterPage';

const Routing: React.FC = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact={true} path="/" render={() => <Home />} />
      <Route exact={true} path="/login" render={() => <LoginPage />} />
      <Route exact={true} path="/register" render={() => <RegisterPage />} />
    </Switch>
  );
};

export default Routing;
