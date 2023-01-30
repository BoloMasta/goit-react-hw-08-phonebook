import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactsSlice';

axios.defaults.baseURL = 'https://63d5648a20b08498cbcd18cc.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  const { name, phone } = contact;
  try {
    // console.log(contact);
    // console.log(number);
    const { data } = await axios.post('/contacts', {
      name,
      phone,
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  // console.log(id);
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const deleteAllContacts = createAsyncThunk(
//   'contacts/deleteAllContacts',
//   async (_, thunkAPI) => {
//     try {
//       const postIds = await axios.get('/contacts');
//       console.log(postIds.data);
//       postIds.data.forEach(async post => {
//         await axios.delete(`/contacts/${post.id}`);
//       });
//       return postIds.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const deleteAllContacts = {
  reducer: (state, action) => {
    state.items = [];
  },
  prepare: () => {
    return {
      payload: {
        id: null,
        name: null,
        phone: null,
      },
    };
  },
};

// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchingSuccess(data));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };
