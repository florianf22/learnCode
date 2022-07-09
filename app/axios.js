import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.udemy.com/api-2.0/courses',
  headers: {
    Accept: 'application/json, text/plain, */*',
    Authorization: '',
    'Content-Type': 'application/json;charset=utf-8',
  },
});
