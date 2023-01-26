import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { Filter } from '../Filter/Filter';
import css from './StatusBar.module.css';
import trashIcon from '../../images/trash.png';

export const StatusBar = () => {
  const contacts = useSelector(getContacts);
  return (
    <div className={css.StatusBar}>
      <div className={css.infoSection}>
        <div className={css.counter}>
          <p className={css.counter__header}>You have</p>
          <p className={css.counter__data}>
            {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'}
          </p>
        </div>
        <button className={css.button} type="button">
          <img src={trashIcon} alt="trash icon" className={css.icon} />
        </button>
      </div>

      <Filter />
    </div>
  );
};
