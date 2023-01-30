import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/operations';
import css from './ContactListItem.module.css';
import userIcon from '../../images/user.png';
import telephoneIcon from '../../images/telephone.png';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  // console.log(contact);

  return (
    <li className={css.item}>
      <img src={userIcon} alt="user icon" className={css.user_icon} />
      <p className={css.text}>
        {contact.name}: {contact.phone}
        <a href={`tel:${contact.phone}`}>
          <img src={telephoneIcon} alt="telephone icon" className={css.telephone_icon} />
        </a>
      </p>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

// ContactListItem.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string,
//     //name: PropTypes.string,
//     //number: PropTypes.string,
//   }),
// };
