import Box from '@mui/material/Box';
import phonebookIcon from '../images/phonebook.png';
import Typography from '@mui/material/Typography';

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
  },
  span: {
    position: 'relative',
    top: 26,
  },
  icon: {
    width: 48,
    height: 48,
  },
  title: {
    fontWeight: 800,
    fontSize: 48,
    textAlign: 'center',
  },
};

const Home = () => (
  <Box style={styles.container}>
    <Typography variant="h3" align="center" mb={8}>
      <span style={styles.span}>
        <img src={phonebookIcon} alt="phonebook icon" className={styles.icon} />
      </span>
      &nbsp; Welcome to the Phonebook!
    </Typography>
    <Typography variant="h6" align="center">
      Please, register or log in to continue.
    </Typography>
  </Box>
);

export default Home;
