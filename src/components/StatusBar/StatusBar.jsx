import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsCount } from '../../redux/selectors';
import { sortContacts, sortContactsReverse } from '../../redux/contactsSlice';
import { setFavouriteOnly } from '../../redux/filterSlice';
import { Filter } from '../Filter/Filter';
import css from './StatusBar.module.scss';
import sortIcon from '../../images/sort.png';

export const StatusBar = () => {
  const [sortedAlphabetically, setSortedAlphabetically] = useState(false);
  const dispatch = useDispatch();
  // const sortedAlphabetically = useSelector(selectSortedAlphabetically);
  const { total, favourite } = useSelector(selectContactsCount);

  const handleSortContacts = () => {
    if (sortedAlphabetically) {
      dispatch(sortContactsReverse());
      // dispatch(setSortedAlphabetically(false));
      setSortedAlphabetically(false);
    } else {
      dispatch(sortContacts());
      // dispatch(setSortedAlphabetically(true));
      setSortedAlphabetically(true);
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
          <p className={css.counter__header}>You have:</p>
          <p className={css.counter__data}>
            {total} {total === 1 ? 'contact' : 'contacts'}
            {' (' + favourite + ' ♥ )'}
          </p>
        </div>
        {total > 0 && (
          <div className={css.buttons}>
            <button className={css.likeButton} onClick={addLike}></button>
            <button className={css.button_sort} type="button" onClick={handleSortContacts}>
              <img src={sortIcon} alt="sort icon" className={css.icon} />
            </button>
          </div>
        )}
      </div>
      <Filter />
    </div>
  );
};
