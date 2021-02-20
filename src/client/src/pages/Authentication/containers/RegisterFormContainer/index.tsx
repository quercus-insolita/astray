import React, { useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Heading, Box } from 'grommet';

import RegisterForm from '../../components/RegisterForm';

import { RootState } from '../../../../reducers';

import { checkIfLoading } from '../../../../store/selectors';
import { registerUserRoutine } from '../../routines';

const RegisterFormContainer: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const isSubmitting = useSelector(
    (state: RootState) => checkIfLoading(state, registerUserRoutine.TRIGGER),
    shallowEqual
  );

  const handleSubmit = useCallback(
    ({ email, name, password }) => {
      dispatch(
        registerUserRoutine({
          email: email.trim(),
          name,
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
          Register
        </Heading>
        <RegisterForm handleSubmit={handleSubmit} loading={isSubmitting} />
        <Link to="/login">I am already member</Link>
      </div>
    </Box>
  );
};

export default memo(RegisterFormContainer);
