export default {
  backendApi:
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV === 'production'
      ? 'https://contact.herokuapp.com'
      : 'https://contact.herokuapp.com',
};
