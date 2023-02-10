import phonebookIcon from '../images/phonebook.png';
import Typography from '@mui/material/Typography';

const styles = {
  container: {
    minHeight: 'calc(100vh - 150px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

const Home = () => {
  return (
    <div style={styles.container}>
      <Typography variant="h3" align="center">
        <span style={styles.span}>
          <img src={phonebookIcon} alt="phonebook icon" className={styles.icon} />
        </span>
        &nbsp; Welcome to the Phonebook!
      </Typography>

      {/* <h1 style={styles.title}>
        <span style={styles.span}>
          <img src={phonebookIcon} alt="phonebook icon" className={styles.icon} />
        </span>
        &nbsp; Welcome to the Phonebook!
      </h1> */}
    </div>
  );
};

export default Home;
