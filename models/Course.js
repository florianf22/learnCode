import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const course = new Schema({
  _class: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  is_paid: {
    type: Boolean,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  price_detail: {
    type: String,
    required: true,
  },
  price_serve_tracking_id: {
    type: String,
    required: true,
  },
  visible_instructors: {
    _class: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    display_name: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
      required: true,
    },
    image_50x50: {
      type: String,
      required: true,
    },
    image_100x100: {
      type: String,
      required: true,
    },
    initials: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  image_125_H: {
    type: String,
    required: true,
  },
  image_240x135: {
    type: String,
    required: true,
  },
  is_practice_test_course: {
    type: Boolean,
    required: true,
  },
  image_480x270: {
    type: String,
    required: true,
  },
  published_title: {
    type: String,
    required: true,
  },
  tracking_id: {
    type: String,
    required: true,
  },
  predictive_score: {
    type: String,
    required: true,
  },
  relevancy_score: {
    type: String,
    required: true,
  },
  input_features: {
    type: String,
    required: true,
  },
  lecture_search_result: {
    type: String,
    required: true,
  },
  curriculum_lectures: [],
  order_in_results: {
    type: String,
    required: true,
  },
  curriculum_items: [],
  headline: {
    type: String,
    required: true,
  },
  instructor_name: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

const Course = mongoose.model('Course', course);

export default Course;
