import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//import Button from '@mui/material/Button';
//import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from '../../redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import css from './ContactListItem.module.scss';
//import userIcon from '../../images/user.png';
//import telephoneIcon from '../../images/telephone.png';

import Typography from '@mui/material/Typography';

import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import CallIcon from '@mui/icons-material/Call';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  // const addLike = () => {
  //   dispatch(toogleFavourite(contact));
  // };

  return (
    <ListItem className={clsx(css.item, isLoading && css.loading)}>
      {/* <div className={css.item_icons}>
        <img src={userIcon} alt="user icon" className={css.user_icon} />
        {/* <button
          className={clsx(css.likeButton, contact.favourite && css.liked)}
          title={contact.favourite ? 'Remove from favourites' : 'Add to favourites'}
          onClick={addLike}
        ></button> */}
      {/* </div> */}

      <PersonIcon sx={{ marginRight: 4 }} />

      <Typography variant="h6">
        {contact.name}: {contact.number}
      </Typography>
      <IconButton href={`tel:${contact.number}`}>
        <CallIcon />
      </IconButton>
      {/* <p className={css.text}>
        {contact.name}: {contact.number}
        <a href={`tel:${contact.number}`}>
          <img
            src={telephoneIcon}
            alt="telephone icon"
            title="Call to"
            className={css.telephone_icon}
          />
        </a>
      </p> */}
      {/* <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button> */}
      <IconButton onClick={handleDelete} sx={{ marginLeft: 'auto' }}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
