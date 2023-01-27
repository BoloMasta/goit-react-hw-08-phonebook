import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import userIcon from '../../images/user.png';
import telephoneIcon from '../../images/telephone.png';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <img src={userIcon} alt="user icon" className={css.user_icon} />
      <p className={css.text}>
        {contact.name}: {contact.number}
        <a href={`tel:${contact.number}`}>
          <img src={telephoneIcon} alt="telephone icon" className={css.telephone_icon} />
        </a>
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
