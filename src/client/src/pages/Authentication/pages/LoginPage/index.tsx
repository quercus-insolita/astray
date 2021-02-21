import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginFormContainer from '../../containers/LoginFormContainer';

const LoginPage: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const { isAuthenticated } = useSelector(state => state.currentUser);

  if (isAuthenticated) {
    history.push('/');
  }

  return (
    <div>
      <LoginFormContainer />
    </div>
  );
};

export default LoginPage;
