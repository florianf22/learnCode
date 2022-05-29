import * as React from 'react';
import Image from 'next/image';

const CourseOverview = ({ course }) => {
  const { imageUrl, title, description, author, date, avatarUrl } = course;

  return (
    <article className="mt-20 bg-gray-100 p-4 w-min">
      <div className={`relative h-[150px] w-[250px]`}>
        <Image src={imageUrl} alt="aaa" layout="fill" />
      </div>

      <h2 className="font-bold text-3xl mt-3 font-tinos">{title}</h2>

      <p className="mt-6 font-poppins text-sm">{description}</p>

      <div className="mt-8">
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
          <p className="font-bold text-sm">{author}</p>
          <p className="text-xs">{date.toDateString()}</p>
        </div>
      </div>
    </article>
  );
};

export default CourseOverview;
