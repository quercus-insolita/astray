import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grommet } from 'grommet';

import Routing from '../Routing';

import { history } from '../../helpers/history.helper';
import configureStore from '../../store';
import theme from './theme';

const store = configureStore();

const App: React.FC = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Grommet theme={theme}>
          <Routing />
        </Grommet>
      </Router>
    </Provider>
  );
};

export default App;
