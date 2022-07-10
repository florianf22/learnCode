import { formatVisibleInstructors } from '../../../lib';
import connectDB from '../../../middleware/mongodb';
import Course from '../../../models/Course';

const handler = async (req, res) => {
  const { query } = req.query;

  let courses = [];

  if (query === 'undefined') {
    courses = await Course.find({
      headline: new RegExp(/css|javascript/, 'i'),
    });

    console.log(courses);
  } else {
    const changedQuery = query.replace(/\,/g, '|');

    courses = await Course.find({
      headline: new RegExp(changedQuery, 'i'),
    });
  }

  const formattedCourses = formatVisibleInstructors(courses);

  return res.status(200).send(formattedCourses);
};

export default connectDB(handler);
