import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
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
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Login form
      </Typography>
      <TextField
        label="Email"
        variant="standard"
        name="email"
        type="email"
        autoComplete="off"
        placeholder="Enter your email"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        variant="standard"
        name="password"
        type="password"
        autoComplete="off"
        placeholder="Enter your password"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        type="submit"
        size="large"
        endIcon={<LoginIcon />}
        className={css.submitButton}
      >
        Log in
      </Button>
    </form>
  );
};
