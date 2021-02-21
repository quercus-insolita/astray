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
    <Box align="center" justify="center" height="90vh">
      <div>
        {/* {error && <ErrorMessage error={error} />} */}
        <Heading level="2" margin={{ bottom: '30px' }}>
          Зареєструватися
        </Heading>
        <RegisterForm handleSubmit={handleSubmit} loading={isSubmitting} />
        <Link to="/login">У мене вже є аккаунт</Link>
      </div>
    </Box>
  );
};

export default memo(RegisterFormContainer);
