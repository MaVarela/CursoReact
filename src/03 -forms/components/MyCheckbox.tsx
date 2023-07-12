import { ErrorMessage, useField } from "formik";

interface Props {
  label?: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} style={{ paddingTop: 10 }}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
