import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RegisterFormContainer from '../../containers/RegisterFormContainer';

const RegisterPage: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const { isAuthenticated } = useSelector(state => state.currentUser);

  if (isAuthenticated) {
    history.push('/');
  }

  return (
    <div>
      <RegisterFormContainer />
    </div>
  );
};

export default RegisterPage;
