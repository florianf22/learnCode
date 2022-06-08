// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from '../../api/axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('');

    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
}
