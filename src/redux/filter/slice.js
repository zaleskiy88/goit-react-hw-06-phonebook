import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});

// imports in: persistedReducer.js
export const { filterContacts } = filterSlice.actions;

// Selectors:
// Imports in App.jsx
export const getFilterValue = state => {
  return state.filter;
};
