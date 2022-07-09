import { formatVisibleInstructors } from '../../../lib';
import connectDB from '../../../middleware/mongodb';
import Course from '../../../models/Course';

const handler = async (req, res) => {
  const { query } = req.query;

  const changedQuery = query.replace(/\,/g, '|');

  // find courses where headline matches query
  const courses = await Course.find({
    headline: new RegExp(changedQuery, 'i'),
  });

  console.log(courses);

  const formattedCourses = formatVisibleInstructors(courses);

  return res.status(200).send(formattedCourses);
};

export default connectDB(handler);

// $regex: new RegExp(/css|php/, 'i'),
//
