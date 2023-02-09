import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputs}>
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
      </div>

      <button className={css.button} type="submit">
        Log in
      </button>
    </form>
  );
};
