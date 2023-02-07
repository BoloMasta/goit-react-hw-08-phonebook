import css from './Header.module.scss';
import phonebookIcon from '../../images/phonebook.png';

export const Header = () => (
  <h1 className={css.header}>
    <span>
      <img src={phonebookIcon} alt="phonebook icon" className={css.icon} />
    </span>
    &nbsp; Welcome to the phonebook
  </h1>
);
