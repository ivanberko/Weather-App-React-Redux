export default {
  login(credentials) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: { ...credentials },
          token: 'unique-jwt-token',
        });
      }, 300);
    });
  },
  signup(credentials) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: { ...credentials },
          token: 'unique-jwt-token',
        });
      }, 300);
    });
  },
};
