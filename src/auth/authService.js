import { client } from '../shared/services/client';

const AuthService = {
  // não é a maneira adequada de fazer isso, mas como o foco não é back-end...
  async signIn(email, password) {
    const responseData = (
      await client.get('/users', {
        params: {
          email,
          password,
        },
      })
    ).data;

    if (responseData.length === 0)
      throw new Error('Usuário ou senha incorretos');

    return true;
  },

  signUp(nickname, email, password) {
    return client.post('/users', {
      nickname,
      email,
      password,
    });
  },
};

export default AuthService;
