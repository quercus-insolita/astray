import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routing from '../Routing';

import { history } from '../../helpers/history.helper';
import configureStore from '../../store';

const store = configureStore();

const App: React.FC = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routing />
      </Router>
    </Provider>
  );
};

export default App;
