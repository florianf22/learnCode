import connectDB from '../../middleware/mongodb';
import User from '../../models/user';

const handler = async (req, res) => {
  // TODO:
  try {
    // const user = new User({
    //   name: 'Nika',
    //   email: 'Nika2022@gmail.com',
    //   password: 'Irock,baby%%',
    // });

    // const userCreated = await user.save();

    return res.status(200).send({
      ok: 'ok',
    });
  } catch (err) {
    res.status(500).send('Failed');
  }
};

export default connectDB(handler);
