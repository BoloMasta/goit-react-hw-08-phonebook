import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
//import { fetchContacts } from '../redux/contacts/operations';
//import { selectError } from 'redux/contacts/selectors';
import { Layout } from './Layout/Layout';
//import { Header } from './Header/Header';
//import { ContactForm } from './ContactForm/ContactForm';
//import { StatusBar } from './StatusBar/StatusBar';
//import { ContactList } from './ContactList/ContactList';
//import { Notification } from './Notification/Notification';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
  // const dispatch = useDispatch();
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // return (
  //   <>
  //     <Header />
  //     <ContactForm />
  //     <StatusBar />
  //     {error && <Notification message={error} />}
  //     {!error && <ContactList />}
  //   </>
  // );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
