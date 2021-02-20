import React from 'react';
import { withFormik, FormikProps } from 'formik';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import { Lock, MailOption } from 'grommet-icons';

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
    <Box width="medium">
      {/*
    // @ts-ignore */}
      <Form onSubmit={handleSubmit}>
        <Box margin={{ bottom: '30px' }}>
          <FormField htmlFor="email" error={emailError && errors.email}>
            <TextInput
              id="email"
              icon={<MailOption />}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your email"
            />
          </FormField>
          <FormField htmlFor="password" error={passwordError && errors.password}>
            <TextInput
              id="password"
              type="password"
              icon={<Lock />}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
            />
          </FormField>
        </Box>
        <Button
          type="submit"
          primary={true}
          color="neutral-3"
          label="Log in"
          disabled={loading}
          margin={{ bottom: '30px' }}
        />
      </Form>
    </Box>
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
