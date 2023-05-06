import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterSlice } from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice.reducer,
  },
});

export { store };
