import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from 'redux/contacts/slice';
import { filterSlice } from 'redux/filter/slice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

// Combining reducers for two diferent state properties
const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

// creating one persisted reducer
// imports in: store.js
export const persistedReducer = persistReducer(persistConfig, rootReducer);
