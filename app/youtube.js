import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 20,
    type: 'video',
    key: 'AIzaSyC8RYd6X_zQuSQk4nbVdtgiEIcblX0MlYo',
  },
});
