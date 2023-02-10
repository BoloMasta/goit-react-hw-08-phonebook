import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';
import Typography from '@mui/material/Typography';

export const AuthNav = () => (
  <div className={css.wrapper}>
    <NavLink className={css.link} to="/register">
      <Typography variant="h6" fontWeight="600">
        Registration
      </Typography>
    </NavLink>
    <NavLink className={css.link} to="/login">
      <Typography variant="h6" fontWeight="600">
        Login
      </Typography>
    </NavLink>
  </div>
);
