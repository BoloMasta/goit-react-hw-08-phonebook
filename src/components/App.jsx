// import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { StatusBar } from './StatusBar/StatusBar';
import { ContactList } from './ContactList/ContactList';
import phonebookIcon from '../images/phonebook.png';

const App = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <>
      <h1>
        <span>
          <img
            src={phonebookIcon}
            alt="phonebook icon"
            width="40"
            height="40"
            style={{ position: 'relative', top: 7 }}
          />
        </span>
        &nbsp; Redux Phonebook
      </h1>
      <ContactForm handleSubmit={handleSubmit} />
      <StatusBar />
      <ContactList />
    </>
  );
};

export default App;
