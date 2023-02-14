import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/contacts/filterSlice';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Tooltip from '@mui/material/Tooltip';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <Box
      sx={{
        marginLeft: 'auto',
        position: 'relative',
      }}
    >
      <Input
        placeholder="Filter"
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={useSelector(selectFilter)}
        disabled={useSelector(selectContacts).length === 0}
        sx={{ maxWidth: '60px', marginRight: '20px' }}
      />

      {useSelector(selectFilter) && (
        <Tooltip title="Clear filter" placement="bottom" arrow>
          <BackspaceIcon
            sx={{
              fontSize: '20px',
              color: 'grey',
              cursor: 'pointer',
              position: 'absolute',
              top: '7px',
              right: '2px',
              '&:hover': { color: 'black' },
            }}
            onClick={() => dispatch(setContactsFilter(''))}
          />
        </Tooltip>
      )}
    </Box>
  );
};
