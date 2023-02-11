import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.scss';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(register({ name: name.value, email: email.value, password: password.value }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Registration form
      </Typography>

      <TextField
        label="Name"
        variant="standard"
        name="name"
        type="text"
        autoComplete="off"
        placeholder="Enter your name"
        fullWidth
        margin="normal"
      />
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
        color="primary"
        size="large"
        endIcon={<AppRegistrationIcon />}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '30px auto 0 auto',
        }}
      >
        Sign up
      </Button>
    </form>
  );
};
