import React from 'react';
import { withFormik, FormikProps } from 'formik';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import { Lock, User, MailOption } from 'grommet-icons';

import { validationSchema } from './validationSchema';

interface IRegisterFormProps {
  handleSubmit: any;
  loading: boolean;
}

const RegisterForm: React.FC<IRegisterFormProps & FormikProps<any>> = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  loading
}): React.ReactElement => {
  const passwordError = errors.password && touched.password;
  const emailError = errors.email && touched.email;
  const nameError = errors.name && touched.name;
  const confirmPasswordError = errors.confirmPassword && touched.confirmPassword;
  const disabled = loading || passwordError || emailError || nameError || confirmPasswordError;

  return (
    <Box width="medium">
      {/*
    // @ts-ignore */}
      <Form onSubmit={handleSubmit}>
        <Box margin={{ bottom: '30px' }}>
          <FormField htmlFor="name" error={nameError && errors.name}>
            <TextInput
              id="name"
              icon={<User />}
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ім\'я"
            />
          </FormField>
          <FormField htmlFor="email" error={emailError && errors.email}>
            <TextInput
              id="email"
              icon={<MailOption />}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Електронна пошта"
            />
          </FormField>
          <FormField htmlFor="password" error={passwordError && errors.password}>
            <TextInput
              id="password"
              icon={<Lock />}
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Пароль"
            />
          </FormField>
          <FormField
            htmlFor="confirmPassword"
            error={confirmPasswordError && errors.confirmPassword}
          >
            <TextInput
              id="confirmPassword"
              icon={<Lock />}
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Повторіть пароль"
            />
          </FormField>
        </Box>
        <Button
          type="submit"
          primary={true}
          color="neutral-3"
          label="Зареєструватися"
          disabled={!!disabled}
          margin={{ bottom: '30px' }}
        />
      </Form>
    </Box>
  );
};

export default withFormik<any, any>({
  mapPropsToValues: () => ({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  }),
  handleSubmit: (values, bag) => bag.props.handleSubmit(values),
  validationSchema
})(RegisterForm);
