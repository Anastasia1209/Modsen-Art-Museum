import * as yup from 'yup';

export const searchValidationSchema = yup.object().shape({
  query: yup
    .string()
    .required('Запрос не может быть пустым')
    .min(3, 'Запрос должен содержать минимум 3 символа')
    .matches(/^[a-zA-Zа-яА-Я0-9\s]+$/, 'Запрос содержит недопустимые символы'),
});