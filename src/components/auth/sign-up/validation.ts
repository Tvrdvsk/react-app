import * as yup from 'yup';

export const validation = yup.object().shape({
  firstName: yup.string().required('First Name is required field'),
  lastName: yup.string().required('Last Name is required field'),
  phoneNumber: yup.string().required('Phone Number is required field'),
  email: yup.string().required('Email is required field'),
  password: yup.string().required('Password is required field'),
  confirmPassword: yup.string().required('Confirm Password is required field'),
  month: yup
    .number()
    .required('Month is required field')
    .min(1, 'Month can not be under 1')
    .max(12, 'Month can not be more than 12'),
  day: yup
    .number()
    .required('Day is required field')
    .min(1, 'Month can not be under 1')
    .max(31, 'Day can not be more than 31'),
  year: yup
    .number()
    .required('Year is required field')
    .max(2023, 'Year can not be more than 2023')
    .min(1900, 'Year can not be under 1990'),
  country: yup.string().required('Country is required field'),
  assignment: yup.boolean().required('Assignment is required field'),
});
