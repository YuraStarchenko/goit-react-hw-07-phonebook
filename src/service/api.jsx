import axios from 'axios';

axios.defaults.baseURL = 'https://6453840be9ac46cedf277b55.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const addContact = async ({ name, phone }) => {
  const { data } = await axios.post(`/contacts`, { name, phone });
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
