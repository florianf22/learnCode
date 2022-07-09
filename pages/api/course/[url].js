import { formatVisibleInstructors } from '../../../lib';
import connectDB from '../../../middleware/mongodb';
import Course from '../../../models/Course';

const handler = async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send({ error: 'Invalid course id' });
  } else {
    const course = await Course.findOne({
      published_title: url,
    });

    if (!course) {
      return res.status(404).send({ error: 'Course not found' });
    } else {
      const formattedCourse = await formatVisibleInstructors([course]);
      return res.status(200).send({ course: formattedCourse[0] });
    }
  }
};

export default connectDB(handler);
