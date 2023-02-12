import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const styles = {
  activeLink: {
    color: 'red',
    display: 'inline-block',
    textDecoration: 'underline',
    padding: '12px',
    fontWeight: '700',
    fontSize: '1.3rem',
  },
  link: {
    color: 'black',
    display: 'inline-block',
    textDecoration: 'none',
    padding: '12px',
    fontWeight: '700',
    fontSize: '1.3rem',
  },
};

export const AuthNav = () => (
  <Box
    sx={{
      marginLeft: 'auto',
    }}
  >
    <NavLink to="/register" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
      <Typography variant="h6" fontWeight="600">
        Register
      </Typography>
    </NavLink>
    <NavLink to="/login" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
      <Typography variant="h6" fontWeight="600">
        Login
      </Typography>
    </NavLink>
  </Box>
);
