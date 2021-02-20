import React from 'react';

import LoginForm from '../../components/LoginForm';

const LoginFormContainer: React.FC = (): React.ReactElement => {
  const handleSubmit = () => {};

  return (
    <div>
      <p>Log In</p>
      <LoginForm handleSubmit={handleSubmit} loading={false} />
    </div>
  );
};

export default LoginFormContainer;
