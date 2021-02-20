import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';

const Routing: React.FC = (): React.ReactElement => {
  return (
    <Switch>
      <Route path="/" render={() => <Home />} />
    </Switch>
  );
};

export default Routing;
