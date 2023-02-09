import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.scss';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

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
        <TextField
          label="Email"
          variant="standard"
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Enter your email"
          sx={{ marginBottom: '20px', width: '300px' }}
        />
        <TextField
          label="Password"
          variant="standard"
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Enter your password"
          sx={{ width: '300px' }}
        />
        {/* <label className={css.label}>
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
        </label> */}
      </div>

      {/* <button className={css.button} type="submit">
        Log in
      </button> */}

      <Button
        variant="contained"
        type="submit"
        endIcon={<LoginIcon />}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}
      >
        Log in
      </Button>
    </form>
  );
};
