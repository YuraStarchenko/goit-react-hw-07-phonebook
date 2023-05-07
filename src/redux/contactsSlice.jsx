import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';
//Масив экшенов.
const extraActions = [fetchContacts, addContacts, deleteContacts];
// Мэпает масив экшенов и распыляет их в isAnyOf.
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));
// Case reducer
const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};
const addContactsSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};
const deleteContactsSuccessReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const pendingReducer = state => {
  state.isLoading = true;
};
const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};
const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContacts.fulfilled, addContactsSuccessReducer)
      .addCase(deleteContacts.fulfilled, deleteContactsSuccessReducer)
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const contactsReducer = contactSlice.reducer;