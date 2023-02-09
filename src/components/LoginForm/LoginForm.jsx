import css from './LoginForm.module.scss';

export const LoginForm = () => {
  return (
    <form className={css.form}>
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
