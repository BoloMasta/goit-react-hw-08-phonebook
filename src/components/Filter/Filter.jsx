import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/contacts/filterSlice';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.scss';
// import clearIcon from '../../images/backspace.png';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <Input
        placeholder="Filter contacts by name"
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={useSelector(selectFilter)}
        disabled={useSelector(selectContacts).length === 0}
        sx={{ maxWidth: '170px', marginRight: '10px' }}
      />
      {/* <TextField
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={useSelector(selectFilter)}
        disabled={useSelector(selectContacts).length === 0}
        variant="outlined"
        sx={{
          display: 'inline',
          marginLeft: 'auto',
          width: '50%',
          height: '20px',
        }}
        inputProps={{ padding: '0px', fontSize: '14px' }}
      /> */}

      {useSelector(selectFilter) && (
        <button
          className={css.button}
          type="button"
          onClick={() => dispatch(setContactsFilter(''))}
        >
          <img
            src="https://img.icons8.com/ios/50/000000/backspace.png"
            alt="clear icon"
            className={css.icon}
          />
        </button>
      )}
    </div>

    // <label className={css.label}>
    //   Find contact by name:
    //   <input
    //     className={css.input}
    //     type="text"
    //     name="filter"
    //     onChange={handleChangeFilter}
    //     value={useSelector(selectFilter)}
    //     disabled={useSelector(selectContacts).length === 0}
    //   />
    //   {useSelector(selectFilter) && (
    //     <button
    //       className={css.button}
    //       type="button"
    //       onClick={() => dispatch(setContactsFilter(''))}
    //     >
    //       <img src={clearIcon} alt="clear icon" className={css.icon} />
    //     </button>
    //   )}
    // </label>
  );
};
