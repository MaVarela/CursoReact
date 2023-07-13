import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .min(2, 'Debe tener al menos 2 caracteres')
            .required('Requerido'),
          email: Yup.string()
            .required('Requerido')
            .email('El email no tiene un formato válido'),
          password1: Yup.string()
            .required('Requerido')
            .min(6, 'La password debe tener al menos 6 caracteres'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Las passwords no son iguales')
            .required('Requerido'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label="Nombre"
              name="name"
              placeholder="Nombre"
            />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="some-email-address@gmail.com"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
            />
            <MyTextInput
              label="Repetir password"
              name="password2"
              type="password"
            />
            <button type='submit'>Submit</button>
            <button type='button' onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}