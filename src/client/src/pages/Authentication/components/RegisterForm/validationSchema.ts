import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email').email('Enter a valid email').required('Email is required'),
  name: Yup.string().required('Name is required'),
  password: Yup.string()
    .label('Password')
    .required('Password is required')
    .min(5, 'Password must have at least 5 characters ')
    .max(20, 'Password must be less than 20 characters '),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
});
