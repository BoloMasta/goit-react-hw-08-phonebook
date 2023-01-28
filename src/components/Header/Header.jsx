import css from './Header.module.css';
import phonebookIcon from '../../images/phonebook.png';

export const Header = () => {
  return (
    <h1 className={css.header}>
      <span>
        <img src={phonebookIcon} alt="phonebook icon" className={css.icon} />
      </span>
      &nbsp; Redux Phonebook
    </h1>
  );
};
