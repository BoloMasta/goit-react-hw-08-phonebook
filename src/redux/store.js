import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
//import storage from 'redux-persist/lib/storage';
//import { persistStore, persistReducer } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
//   version: 1,
//   whitelist: ['contacts'],
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers({ contacts: contactsReducer, filter: filterReducer })
// );

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

//export const persistor = persistStore(store);
