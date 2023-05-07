import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6453840be9ac46cedf277b55.mockapi.io';

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
  async ({ name, phone }, thunkAPI) => {
    try {
      const { data } = await axios.post(`/contacts`, { name, phone });
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