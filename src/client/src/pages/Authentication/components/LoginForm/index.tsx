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
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onBlur={handleBlur('email')}
          onChange={handleChange('email')}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onBlur={handleBlur('password')}
          onChange={handleChange('password')}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
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
