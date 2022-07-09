import { formatVisibleInstructors } from '../../../lib';
import connectDB from '../../../middleware/mongodb';
import Course from '../../../models/Course';

const handler = async (req, res) => {
  const courses = await Course.find({
    headline: {
      $regex: /js/i,
    },
  }).limit(20);

  const formattedCourses = formatVisibleInstructors(courses);

  return res.status(200).send(formattedCourses);
};

export default connectDB(handler);
