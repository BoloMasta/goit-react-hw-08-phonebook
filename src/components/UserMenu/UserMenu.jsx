import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '18px', marginLeft: 'auto' }}>
      <Typography variant="subtitle1">{user.name}, you are logged in</Typography>
      <IconButton title="Logout" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
