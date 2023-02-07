import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { deleteContact, toogleFavourite } from '../../redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import css from './ContactListItem.module.scss';
import userIcon from '../../images/user.png';
import telephoneIcon from '../../images/telephone.png';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const addLike = () => {
    dispatch(toogleFavourite(contact));
  };

  return (
    <li className={clsx(css.item, isLoading && css.loading)}>
      <div className={css.item_icons}>
        <img src={userIcon} alt="user icon" className={css.user_icon} />
        <button
          className={clsx(css.likeButton, contact.favourite && css.liked)}
          title={contact.favourite ? 'Remove from favourites' : 'Add to favourites'}
          onClick={addLike}
        ></button>
      </div>
      <p className={css.text}>
        {contact.name}: {contact.phone}
        <a href={`tel:${contact.phone}`}>
          <img
            src={telephoneIcon}
            alt="telephone icon"
            title="Call to"
            className={css.telephone_icon}
          />
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
