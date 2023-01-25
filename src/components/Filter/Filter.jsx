import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setContatsFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setContatsFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input className={css.input} type="text" name="filter" onChange={handleChangeFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
