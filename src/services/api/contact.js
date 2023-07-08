import axios from '../../plugins/axios';

export const getContactApi = async () => await axios.get('/contact');
export const getDetailContactApi = async (id) => await axios.get(`/contact/${id}`);
export const addContactApi = async (data) => await axios.post('/contact', data);
export const updateContactApi = async (id, data) => await axios.put(`/contact/${id}`, data);
export const deleteContactApi = async (id) => await axios.delete(`/contact/${id}`);