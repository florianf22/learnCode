import * as React from 'react';
import Image from 'next/image';

const CourseOverview = ({ course }) => {
  const {
    image_480x270,
    title,
    headline,
    visible_instructors: { name: author, image_50x50: avatarUrl },
    predictive_score: date,
  } = course;

  return (
    <article className="mt-20 p-4 w-min">
      <div className={`relative h-[150px] w-[300px]`}>
        <Image src={image_480x270} alt="aaa" layout="fill" objectFit="cover" />
      </div>

      <h2 className="font-bold text-3xl mt-3 font-tinos">{title}</h2>

      <p className="mt-6 font-poppins text-sm">{headline}</p>

      <div className="mt-8 flex gap-4 items-center">
        <div
          className={`relative h-[50px] w-[50px] rounded-lg overflow-hidden`}
        >
          <Image
            src={avatarUrl}
            alt="aaa"
            layout="fill"
            className="object-fill"
          />
        </div>

        <div>
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-xs">{date}</p>
        </div>
      </div>
    </article>
  );
};

export default CourseOverview;
