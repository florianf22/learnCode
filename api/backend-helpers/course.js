import { getBaseUrl } from '../../lib';

export const fetchCourses = async query => {
  const res = await fetch(`${getBaseUrl()}/api/course?query=${query}`);
  const data = await res.json();

  return data;
};

export const fetchCourse = async id => {
  const res = await fetch(`${getBaseUrl()}/api/course/${id}`);
  const data = await res.json();

  return data;
};
