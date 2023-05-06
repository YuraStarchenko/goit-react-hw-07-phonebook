import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { setFilter } from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: setFilter,
  },
});

export { store };
