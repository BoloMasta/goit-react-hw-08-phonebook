import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>

      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
