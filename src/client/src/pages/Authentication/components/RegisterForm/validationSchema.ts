import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email').email('Введіть валідну електронну пошту').required('Введіть електронну пошту'),
  name: Yup.string().required('Введіть ім\'я'),
  password: Yup.string()
    .label('Password')
    .required('Введіть пароль')
    .min(5, 'Пароль повинен бути не менше 5 символів')
    .max(20, 'Пароль повинен бути не більше 20 символів '),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Введіть повторний пароль')
});
