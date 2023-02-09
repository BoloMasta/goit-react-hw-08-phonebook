import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = e.target.elements;

    dispatch(register({ name: name.value, email: email.value, password: password.value }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Enter your name"
        />
      </label>

      <label className={css.label}>
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Enter your email"
        />
      </label>

      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Enter your password"
        />
      </label>

      <button className={css.button} type="submit">
        Sign up
      </button>
    </form>
  );
};
