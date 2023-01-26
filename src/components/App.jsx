import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { StatusBar } from './StatusBar/StatusBar';
import { ContactList } from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      setContacts(JSON.parse(contacts));
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    dispatch(addContact(form.elements.name.value, form.elements.number.value));

    // const { name, number } = form.elements;
    // const contact = {
    //   name: name.value,
    //   number: number.value,
    //   id: nanoid(),
    // };

    // if (contacts.find(contact => contact.name === name.value)) {
    //   alert(`${name.value} is already in contacts`);
    //   return;
    // }

    // setContacts(prevState => [...prevState, contact]);
    // localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
    form.reset();
  };

  // const onRemoveContact = id => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== id));
  //   localStorage.setItem(
  //     'contacts',
  //     JSON.stringify(contacts.filter(contact => contact.id !== id))
  //   );
  // };

  const onChangeFilter = event => {
    setFilter(event.target.value);
  };

  return (
    <>
      <h1>Redux Phonebook ☎️</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <StatusBar />
      <ContactList contacts={contacts} filter={filter} />
    </>
  );
};

export default App;
