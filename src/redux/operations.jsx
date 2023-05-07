import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64575cd40c15cb148206c9a9.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts / fetchAll',
  async (_, thinkAPI) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (e) {
      return thinkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts / addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post(`/contacts`, { name, number });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
