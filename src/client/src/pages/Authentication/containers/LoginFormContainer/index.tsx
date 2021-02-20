import React, { useCallback, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heading, Box } from 'grommet';

import LoginForm from '../../components/LoginForm';

import { IUserCredentials } from '../../models/user';
import { RootState } from '../../../../reducers';

import { checkIfLoading } from '../../../../store/selectors';
import { loginUserRoutine } from '../../routines';

const LoginFormContainer: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const isSubmitting = useSelector(
    (state: RootState) => checkIfLoading(state, loginUserRoutine.TRIGGER),
    shallowEqual
  );

  const handleSubmit = useCallback(
    ({ email, password }: IUserCredentials) => {
      dispatch(
        loginUserRoutine({
          email: email.trim(),
          password
        })
      );
    },
    [dispatch]
  );

  return (
    <Box align="center" justify="center" background={{ color: '#f8f8f8' }}>
      <div>
        {/* {error && <ErrorMessage error={error} />} */}
        <Heading level="2" margin={{ bottom: '30px' }}>
          Sign in
        </Heading>
        <LoginForm handleSubmit={handleSubmit} loading={isSubmitting} />
        <Link to="/register">Create an account</Link>
      </div>
    </Box>
  );
};

export default memo(LoginFormContainer);
