
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

interface formData {
  name: string,
  email: string,
  password1: string,
  password2: string,
}

export const RegisterPage = () => {
  const {
    onChange, name, email,
    password1, password2, resetForm, isValidEmail
  } = useForm<formData>({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={(x) => onSubmit(x)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          className={`${name.trim().length <= 0 && 'has-error'}`}
          onChange={onChange}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener al menos 6 caracteres</span>}
        <input
          type="password"
          placeholder="Repeat password"
          name="password2"
          value={password2}
          onChange={(event) => onChange(event)}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length  > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  );
}