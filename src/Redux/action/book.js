import Axios from 'axios';
const STRING_URL = 'http://192.168.100.113:3009/api/v1/';

export const getBook = (page) => {
  return {
    type: 'GET_BOOK',
    payload: Axios.get(STRING_URL + `?page=${page}`),
  };
};