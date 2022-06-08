export const formatVisibleInstructors = courses => {
  const formatted = courses.map(course => {
    const { visible_instructors } = course;
    const instructors = JSON.parse(visible_instructors)[0];

    console.log(course);

    return {
      ...course._doc,
      visible_instructors: instructors,
    };
  });

  console.log(formatted);

  return formatted;
};
