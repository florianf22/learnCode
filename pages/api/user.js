import connectDB from '../../middleware/mongodb';
import User from '../../models/user';

const handler = async (req, res) => {
  //   if (req.method === 'POST') {
  //     const { name, email, password } = req.body;
  //     if (name && email && password) {
  //       try {
  //         const user = new User({
  //           name,
  //           email,
  //           password,
  //         });
  //         const userCreated = await user.save();
  //         return res.status(200).send(userCreated);
  //       } catch (error) {
  //         return res.status(500).send(error.message);
  //       }
  //     } else {
  //       res.status(422).send('data_incomplete');
  //     }
  //   } else {
  //     res.status(422).send('req_method_not_supported');
  //   }

  try {
    const user = new User({
      name: 'Nika',
      email: 'Nika2022@gmail.com',
      password: 'Irock,baby%%',
    });

    const userCreated = await user.save();

    return res.status(200).send(userCreated);
  } catch (err) {
    console.log(err);
    res.status(500).send('Failll!!!!');
  }
};

export default connectDB(handler);
