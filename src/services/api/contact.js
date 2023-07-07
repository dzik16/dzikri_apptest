export const getContact = async () => await axios.get('/contact');
export const getDetailContact = async (id) => await axios.get(`/contact/${id}`);
export const addContact = async (payload) => await axios.post('/contact', { payload });
export const updateContact = async (id, payload) => await axios.put(`/contact/${id}`, { payload });
export const deleteContact = async (id) => await axios.delete(`/contact/${id}`);