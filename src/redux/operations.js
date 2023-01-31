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

export const deleteAllContacts = createAsyncThunk(
  'contacts/deleteAllContacts',
  async (_, thunkAPI) => {
    const contactsIds = thunkAPI.getState().contacts.items.map(contact => contact.id);
    contactsIds.forEach(async id => {
      try {
        await axios.delete(`/contacts/${id}`);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    });
  }
);
