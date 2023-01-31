import { useSelector, useDispatch } from 'react-redux';
import { selectSortedAlphabetically, selectContactsCount } from 'redux/selectors';
import {
  deleteAllContacts,
  sortContactsAlphabetically,
  sortContactsReverseAlphabetically,
} from '../../redux/contactsSlice';
//import { deleteAllContacts } from 'redux/operations';
import { setSortedAlphabetically } from 'redux/filterSlice';
import { Filter } from '../Filter/Filter';
import css from './StatusBar.module.css';
import sortIcon from '../../images/sort.png';
import trashIcon from '../../images/trash.png';

export const StatusBar = () => {
  const dispatch = useDispatch();
  const sortedAlphabetically = useSelector(selectSortedAlphabetically);
  const contactsCount = useSelector(selectContactsCount);

  const handleDeleteAllContacts = () => {
    dispatch(deleteAllContacts());
  };
  const handleSortContacts = () => {
    dispatch(setSortedAlphabetically(!sortedAlphabetically));
    sortedAlphabetically
      ? dispatch(sortContactsReverseAlphabetically())
      : dispatch(sortContactsAlphabetically());
  };

  return (
    <div className={css.StatusBar}>
      <div className={css.infoSection}>
        <div className={css.counter}>
          <p className={css.counter__header}>You have</p>
          <p className={css.counter__data}>
            {contactsCount} {contactsCount === 1 ? 'contact' : 'contacts'}
          </p>
        </div>
        {contactsCount > 0 && (
          <div className={css.buttons}>
            <button className={css.button_sort} type="button" onClick={handleSortContacts}>
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
