import { Component } from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export class ContactListItem extends Component {
  componentDidMount() {
    localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
  }

  componentWillUnmount() {
    localStorage.setItem(
      'contacts',
      JSON.stringify(
        this.props.contacts.filter(
          contact => contact.id !== this.props.contact.id
        )
      )
    );
  }

  render() {
    const { contact, onRemoveContact } = this.props;

    return (
      <li className={css.item}>
        <p className={css.text}>
          {contact.name}: {contact.number}
        </p>

        <button
          className={css.button}
          type="button"
          onClick={() => onRemoveContact(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onRemoveContact: PropTypes.func,
};
