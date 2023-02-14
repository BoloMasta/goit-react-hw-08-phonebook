import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Tooltip from '@mui/material/Tooltip';

const styles = {
  link: {
    marginLeft: '15px',
    position: 'relative',

    '&.active::after': {
      content: '""',
      display: 'block',
      height: '40px',
      width: '40px',
      borderRadius: '50%',
      backgroundColor: '#be4d25',
      position: 'absolute',
      bottom: '0',
      left: '0',
      boxShadow: '0 0 10px 1px #be4d25',
      opacity: 0.2,
    },
  },
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link component={NavLink} to="/" sx={styles.link}>
        <Tooltip title="Home" placement="bottom" arrow>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Tooltip>
      </Link>
      {isLoggedIn && (
        <Link component={NavLink} to="/contacts" sx={styles.link}>
          <Tooltip title="Contacts" placement="bottom" arrow>
            <IconButton>
              <ImportContactsIcon />
            </IconButton>
          </Tooltip>
        </Link>
      )}

      {/* <NavLink to="/" style={{ marginLeft: '15px' }}>
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
      )} */}
    </nav>
  );
};
