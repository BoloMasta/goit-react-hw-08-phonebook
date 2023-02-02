import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { FadeLoader } from 'react-spinners';
import { fetchContacts } from '../redux/operations';
import { selectError } from 'redux/selectors';
import { Header } from './Header/Header';
import { ContactForm } from './ContactForm/ContactForm';
import { StatusBar } from './StatusBar/StatusBar';
import { ContactList } from './ContactList/ContactList';
import { Notification } from './Notification/Notification';

const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ContactForm />
      <StatusBar />
      {error && <Notification message={error.message} />}
      {!error && <ContactList />}
    </>
  );
};

export default App;
