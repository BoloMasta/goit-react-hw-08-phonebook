import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsCount } from '../../redux/selectors';
import {
  sortContactsAz,
  sortContactsAzReverse,
  sortContactsByDate,
  sortContactsByDateReverse,
} from '../../redux/contactsSlice';
import { setFavouriteOnly } from '../../redux/filterSlice';
import { Filter } from '../Filter/Filter';
import css from './StatusBar.module.scss';
import sortIcon from '../../images/sort.png';
import sortAzIcon from '../../images/sortaz.png';

export const StatusBar = () => {
  const [sortedAlphabetically, setSortedAlphabetically] = useState(false);
  const [sortedByDate, setSortedByDate] = useState(false);
  const dispatch = useDispatch();
  // const sortedAlphabetically = useSelector(selectSortedAlphabetically);
  const { total, favourite } = useSelector(selectContactsCount);

  const handleSortAzContacts = () => {
    if (sortedAlphabetically) {
      dispatch(sortContactsAzReverse());
      setSortedAlphabetically(false);
    } else {
      dispatch(sortContactsAz());
      setSortedAlphabetically(true);
    }
  };

  const handleSortDateContacts = () => {
    if (sortedByDate) {
      dispatch(sortContactsByDateReverse());
      setSortedByDate(false);
    } else {
      dispatch(sortContactsByDate());
      setSortedByDate(true);
    }
  };

  const addLike = event => {
    event.target.classList.toggle(css.liked);
    dispatch(setFavouriteOnly());
  };

  return (
    <div className={css.StatusBar}>
      <div className={css.infoSection}>
        <div className={css.counter}>
          <p className={css.counter__data}>
            You have: {total} {total === 1 ? 'contact' : 'contacts'}
            {' (' + favourite + ' ♥ )'}
          </p>
        </div>
        {total > 0 && (
          <div className={css.buttons}>
            <button className={css.likeButton} onClick={addLike}></button>
            <button className={css.button_sort} type="button" onClick={handleSortAzContacts}>
              <img src={sortAzIcon} alt="sort AZ icon" className={css.icon} />
            </button>
            <button className={css.button_sort} type="button" onClick={handleSortDateContacts}>
              <img src={sortIcon} alt="sort date icon" className={css.icon} />
            </button>
          </div>
        )}
      </div>
      <Filter />
    </div>
  );
};
