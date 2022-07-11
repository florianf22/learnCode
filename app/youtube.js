import axios from 'axios';

const KEY = 'AIzaSyBL3GElmvYt7PuF57jkFGsxNidnBKFCtVo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 20,
    type: 'video',
    key: process.env.YOUTUBE_API_KEY,
  },
});
