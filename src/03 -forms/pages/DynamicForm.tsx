import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json'
import { MyTextInput, MySelect } from '../components';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name]= input.value;
  if (!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }
    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value} caracteres`);
    }
    if (rule.type === 'maxLength') {
      schema = schema.max((rule as any).value || 10, `Máximo de ${(rule as any).value} caracteres`);
    }
    if (rule.type === 'email') {
      schema = schema.email('Debe ingresar un formato de email válido');
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        { (formik) => (
          <Form noValidate>
            {
              formJson.map(({ type, name, placeholder, label, options }) => {
                if (type === 'input' || type === 'password' || type === 'email') {
                  return <MyTextInput
                    key={name}
                    type={(type as any)}
                    name={(name as any)}
                    label={(label as any)}
                    placeholder={(placeholder as any)}
                  />
                }
                if (type === 'select') {
                  return <MySelect
                    key={name}
                    label={label}
                    name={name}
                  >
                    <option>Seleccionar una opción</option>
                    {options?.map(opt => {
                      return <option key={opt.id} value={opt.id}>{opt.description}</option>
                    })}
                  </MySelect>
                }
                throw new Error(`El type: ${type} no es soportado`);
              })
            }
            <button type='submit'>Submit</button>
          </Form>
        ) }
      </Formik>
    </div>
  );
}
