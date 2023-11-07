import Cookies from 'js-cookie';

export const setAuthTokens = (token: string, refreshToken: string) => {
  Cookies.set('token', token, { secure: true });
  Cookies.set('refreshToken', refreshToken, { secure: true });
};

export const removeAuthTokens = () => {
  Cookies.remove('token');
  Cookies.remove('refreshToken');
};
