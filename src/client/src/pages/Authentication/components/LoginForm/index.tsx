import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { withFormik, FormikProps } from 'formik';

import { IUserCredentials } from '../../models/user';
import { validationSchema } from './validationSchema';

interface ILoginFormProps {
  handleSubmit: any;
  loading: boolean;
}

const LoginForm: React.FC<ILoginFormProps & FormikProps<IUserCredentials>> = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  loading
}): React.ReactElement => {
  const emailError = errors.email && touched.email;
  const passwordError = errors.password && touched.password;

  return (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Електронна адреса</Form.Label>
        <Form.Control
          type="email"
          onBlur={handleBlur('email')}
          onChange={handleChange('email')}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          onBlur={handleBlur('password')}
          onChange={handleChange('password')}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Увійти
      </Button>
    </Form>
  );
};

export default withFormik<ILoginFormProps, IUserCredentials>({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  handleSubmit: (values, bag) => bag.props.handleSubmit(values),
  validationSchema
})(LoginForm);
