import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Введіть валідну електронну пошту')
    .required('Введіть електронну пошту'),
  password: Yup.string().required('Введіть пароль')
});
