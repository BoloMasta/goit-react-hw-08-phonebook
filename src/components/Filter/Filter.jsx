import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/contacts/filterSlice';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.scss';
import clearIcon from '../../images/backspace.png';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contact by name:
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={useSelector(selectFilter)}
        disabled={useSelector(selectContacts).length === 0}
      />
      {useSelector(selectFilter) && (
        <button
          className={css.button}
          type="button"
          onClick={() => dispatch(setContactsFilter(''))}
        >
          <img src={clearIcon} alt="clear icon" className={css.icon} />
        </button>
      )}
    </label>
  );
};
