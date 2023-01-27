import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { sortContacts, deleteAllContacts } from '../../redux/contactsSlice';
import { Filter } from '../Filter/Filter';
import css from './StatusBar.module.css';
import sortIcon from '../../images/sort-az.png';
import trashIcon from '../../images/trash.png';

export const StatusBar = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleDeleteAllContacts = () => {
    dispatch(deleteAllContacts());
  };
  const handleSortAllContacts = () => {
    dispatch(sortContacts());
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
          <div className={css.buttons}>
            <button className={css.button_sort} type="button" onClick={handleSortAllContacts}>
              <img src={sortIcon} alt="sort icon" className={css.icon} />
            </button>
            <button className={css.button_delete} type="button" onClick={handleDeleteAllContacts}>
              <img src={trashIcon} alt="trash icon" className={css.icon} />
            </button>
          </div>
        )}
      </div>
      <Filter />
    </div>
  );
};
