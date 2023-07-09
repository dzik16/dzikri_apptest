import axios from '../../plugins/axios';

export const getContactApi = async () => await axios.get('/contact');
export const getDetailContactApi = async (id) => await axios.get(`/contact/${id}`);
export const addContactApi = async (data) => await axios.post('/contact', data, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});
export const updateContactApi = async (id, data) => await axios.put(`/contact/${id}`, data, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});
export const deleteContactApi = async (id) => await axios.delete(`/contact/${id}`);