import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setContatsFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';
import clearIcon from '../../images/backspace.png';
import { getFilter } from 'redux/selectors';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setContatsFilter(event.target.value));
  };

  console.log(useSelector(getFilter));

  return (
    <label className={css.label}>
      Find contact by name:
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={useSelector(getFilter)}
      />
      {useSelector(getFilter) && (
        <button className={css.button} type="button" onClick={() => dispatch(setContatsFilter(''))}>
          <img src={clearIcon} alt="clear icon" className={css.icon} />
        </button>
      )}
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
