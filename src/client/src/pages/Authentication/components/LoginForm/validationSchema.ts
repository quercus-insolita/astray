import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().trim().email().required('Please enter email address'),
  password: Yup.string().required('Please enter password')
});
