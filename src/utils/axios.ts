/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import Cookies from 'js-cookie';

import { setAuthTokens } from 'utils/authTokens';

export const axiosRemote = axios.create({
  headers: {
    'Accept-language': 'ka',
  },
  timeout: 3000,
  params: {},
});

const isUnauthorized = (error) => {
  try {
    return error.response.status === 401;
  } catch (e) {
    return false;
  }
};

const interceptors =
  (axiosInstance) =>
  ({ handleUnauthorized, refreshToken }) => {
    axiosInstance.interceptors.request.use((config) => {
      const token = Cookies.get('token');

      const url = new URL(config.url);

      const lang = url.searchParams.get('languageCode');

      if (!lang) config.params.languageCode = 'ka';

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },

      async (error) => {
        const originalRequest = error.config;
        if (isUnauthorized(error) && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            // reset expired token
            originalRequest.headers.Authorization = '';
            Cookies.set('token', '');

            const tokenResponse = await refreshToken(
              Cookies.get('refreshToken')
            );
            setAuthTokens(tokenResponse.token, tokenResponse.refreshToken);
            originalRequest.headers.Authorization = `Bearer ${tokenResponse.token}`;
          } catch (error) {
            handleUnauthorized();
            return Promise.reject(error);
          }
          return axiosRemote(originalRequest);
        }
        return Promise.reject(error);
      }
    );
  };

const enableInterceptors = interceptors(axiosRemote);

// const interceptorsNew = ({ handleUnauthorized, refreshToken }) => {
//   axios.interceptors.request.use((config) => {
//     console.log('config');
//     const token = Cookies.get('token');
//     config.params = { languageCode: 'ka' };
//     if (token) {
//       console.log(config);
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });
//   axios.interceptors.response.use(
//     (response) => {
//       console.log(`response ${response}`);
//       return response;
//     },
//     (error) => {
//       console.log(`error ${error}`);
//       return Promise.reject(error);
//     }
//   );
// };

export { enableInterceptors };
