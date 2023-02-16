import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/contacts/filterSlice';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Tooltip from '@mui/material/Tooltip';
import css from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <Box className={css.filter}>
      <Input
        placeholder="Filter"
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={useSelector(selectFilter)}
        disabled={useSelector(selectContacts).length < 2}
        className={css.input}
      />

      {useSelector(selectFilter) && (
        <Tooltip title="Clear filter" placement="bottom" arrow>
          <BackspaceIcon
            className={css.backspaceIcon}
            onClick={() => dispatch(setContactsFilter(''))}
          />
        </Tooltip>
      )}
    </Box>
  );
};
