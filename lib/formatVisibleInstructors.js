export const formatVisibleInstructors = courses => {
  const formatted = courses.map(course => {
    const { visible_instructors } = course;
    const instructors = JSON.parse(visible_instructors)[0];

    return {
      ...course._doc,
      visible_instructors: instructors,
    };
  });

  return formatted;
};
