import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { deleteContact, toogleFavourite } from '../../redux/operations';
// import { ButtonToogleHeart } from 'components/ButtonToogleHeart/ButtonToogleHeart';
import css from './ContactListItem.module.scss';
import userIcon from '../../images/user.png';
import telephoneIcon from '../../images/telephone.png';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const addLike = event => {
    // event.target.classList.toggle(css.liked);
    dispatch(toogleFavourite(contact));
  };

  console.log(contact);

  return (
    <li className={css.item}>
      <div className={css.item_icons}>
        <img src={userIcon} alt="user icon" className={css.user_icon} />
        {/*  <ButtonToogleHeart addLike={addLike} /> */}
        <button
          className={clsx(css.likeButton, contact.favourite && css.liked)}
          onClick={addLike}
        ></button>
      </div>
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

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
