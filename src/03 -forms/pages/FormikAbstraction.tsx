import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

export const FormikAbstractions = () => {
  return (
    <div>
      <h1>Formik Abstractions</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .required('Requerido')
            .max(10, 'Debe tener 10 caracteres o menos'),
          email: Yup.string()
            .required('Requerido')
            .email('El email no tiene un formato válido'),
          terms: Yup.boolean().oneOf([true], 'Debe aceptar los términos y condiciones'),
          jobType: Yup.string().required('Requerido').oneOf(['developer', 'designer', 'it-senior'], 'Opción no permitida'),
        })}
      >
        {formik => (
          <Form>
            <MyTextInput
              label="firstName"
              name="firstName"
              placeholder="Mariano"
            />
            <MyTextInput
              label="lastName"
              name="lastName"
              placeholder="Varela"
            />
            <MyTextInput
              label="email"
              name="email"
              type="email"
              placeholder="mariano@gmail.com"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Sr.</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>
            <MyCheckbox
              name="terms"
              label="Términos y condiciones"
            />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
