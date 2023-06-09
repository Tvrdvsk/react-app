import * as yup from 'yup';

const users = localStorage.getItem('users');

const realUsers = users ? Object.keys(JSON.parse(users)) : [];

export const validation = yup.object().shape({
  email: yup.string().required('Email is required field').oneOf(realUsers),
  password: yup.string().required('Password is required field'),
});
