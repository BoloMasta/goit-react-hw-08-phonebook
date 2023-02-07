import css from './RegisterForm.module.scss';

export const RegisterForm = () => {
  return (
    <form className={css.form}>
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
