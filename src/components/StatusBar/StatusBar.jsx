import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { deleteAllContacts } from '../../redux/contactsSlice';
import { Filter } from '../Filter/Filter';
import css from './StatusBar.module.css';
import trashIcon from '../../images/trash.png';

export const StatusBar = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleDeleteAllContacts = () => {
    dispatch(deleteAllContacts());
  };

  return (
    <div className={css.StatusBar}>
      <div className={css.infoSection}>
        <div className={css.counter}>
          <p className={css.counter__header}>You have</p>
          <p className={css.counter__data}>
            {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'}
          </p>
        </div>
        {contacts.length > 0 && (
          <button className={css.button} type="button" onClick={handleDeleteAllContacts}>
            <img src={trashIcon} alt="trash icon" className={css.icon} />
          </button>
        )}
      </div>
      <Filter />
    </div>
  );
};
