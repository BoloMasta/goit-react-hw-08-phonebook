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
  const [sorted, setSorted] = useState({ sortedAlphabetically: false, sortedByDate: false });
  const dispatch = useDispatch();
  const { total, favourite } = useSelector(selectContactsCount);

  const handleSortAzContacts = () => {
    if (sorted.sortedAlphabetically) {
      dispatch(sortContactsAzReverse());
      setSorted({ sortedAlphabetically: false, sortedByDate: false });
    } else {
      dispatch(sortContactsAz());
      setSorted({ sortedAlphabetically: true, sortedByDate: false });
    }
  };

  const handleSortDateContacts = () => {
    if (sorted.sortedByDate) {
      dispatch(sortContactsByDateReverse());
      setSorted({ sortedAlphabetically: false, sortedByDate: false });
    } else {
      dispatch(sortContactsByDate());
      setSorted({ sortedAlphabetically: false, sortedByDate: true });
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
            <button className={css.likeButton} title="Favourites" onClick={addLike}></button>
            <button
              className={css.button_sort}
              type="button"
              title="Sort alphabetically"
              onClick={handleSortAzContacts}
            >
              <img src={sortAzIcon} alt="sort AZ icon" className={css.icon} />
            </button>
            <button
              className={css.button_sort}
              type="button"
              title="Sort by added date"
              onClick={handleSortDateContacts}
            >
              <img src={sortIcon} alt="sort date icon" className={css.icon} />
            </button>
          </div>
        )}
      </div>
      <Filter />
    </div>
  );
};
