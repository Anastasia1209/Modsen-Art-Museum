import * as yup from 'yup';

export const searchValidationSchema = yup.object().shape({
  query: yup
    .string()
    .required('Request cannot be empty')
    .min(3, 'Request must contain at least 3 characters')
    .matches(/^[a-zA-Zа-яА-Я0-9\s]+$/, 'Request contains invalid characters'),
});