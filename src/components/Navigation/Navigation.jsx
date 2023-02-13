import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Tooltip from '@mui/material/Tooltip';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" style={{ marginLeft: '15px' }}>
        <Tooltip title="Home" placement="bottom" arrow>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Tooltip>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={{ marginLeft: '15px' }}>
          <Tooltip title="Contacts" placement="bottom" arrow>
            <IconButton>
              <ImportContactsIcon />
            </IconButton>
          </Tooltip>
        </NavLink>
      )}
    </nav>
  );
};
