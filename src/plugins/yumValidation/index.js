import * as Yup from 'yup';

export const formProductSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Silahkan masukan firstname'),
  lastName: Yup.string()
    .required('Silahkan masukan lastname'),
  age: Yup.number()
    .required('Silahkan masukan age'),
})
