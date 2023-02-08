import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
//import { fetchContacts } from '../redux/contacts/operations';
//import { selectError } from 'redux/contacts/selectors';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { fetchCurrentUser } from 'redux/auth/operations';
//import { Header } from './Header/Header';
//import { ContactForm } from './ContactForm/ContactForm';
//import { StatusBar } from './StatusBar/StatusBar';
//import { ContactList } from './ContactList/ContactList';
//import { Notification } from './Notification/Notification';
import { useAuth } from '../hooks/useAuth';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isFetchingCurrentUser } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

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

  return isFetchingCurrentUser ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
