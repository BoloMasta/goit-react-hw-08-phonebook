import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.scss';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      {/* <p className={css.username}>Welcome, {user.name}</p> */}
      <Typography variant="subtitle1">{user.name}, you are logged in</Typography>

      <IconButton title="Logout" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </IconButton>
    </div>
  );
};
