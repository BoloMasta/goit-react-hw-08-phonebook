import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <IconButton title="Home">
          <HomeIcon />
        </IconButton>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <IconButton title="Contacts">
            <ImportContactsIcon />
          </IconButton>
        </NavLink>
      )}
    </nav>
  );
};
