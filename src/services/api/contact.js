import axios from '../../plugins/axios';

export const getContactApi = async () => await axios.get('/contact');
export const getDetailContactApi = async (id) => await axios.get(`/contact/${id}`);
export const addContactApi = async (payload) => await axios.post('/contact', { payload });
export const updateContactApi = async (id, payload) => await axios.put(`/contact/${id}`, { payload });
export const deleteContactApi = async (id) => await axios.delete(`/contact/${id}`);