import * as React from 'react';
import Image from 'next/image';
import AuthorInfo from './AuthorInfo';

const CourseOverview = ({
  course,
  showCourseCover = false,
  showDescription = true,
  showAuthor = 'picture',
  span = false,
}) => {
  const {
    image_480x270,
    title,
    headline,
    visible_instructors: {
      name: author,
      image_50x50: avatarUrl,
      job_title: authorJobTitle,
    },
  } = course;

  return (
    <article
      className="p-4 w-[300px] m-1 border-[1px] border-gray-300"
      style={{
        gridRowEnd: span ? 'span 2' : 'span 1',
      }}
    >
      {showCourseCover && (
        <div className={`relative h-[150px] w-[250px]`}>
          <Image
            src={image_480x270}
            alt="Course photo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <h2 className="font-bold text-3xl mt-3 font-tinos">
        {title.length > 23 ? title.substring(0, 23) + '...' : title}
      </h2>

      {showDescription && (
        <p className="mt-6 font-poppins text-sm">
          {headline.length > 100
            ? headline.substring(0, 100) + '...'
            : headline}
        </p>
      )}

      <div className="mt-8 flex gap-4 items-center">
        <div
          className={`relative h-[50px] w-[50px] rounded-lg overflow-hidden`}
        >
          <Image
            src={avatarUrl}
            alt="Author photo"
            layout="fill"
            className="object-fill"
          />
        </div>

        <AuthorInfo
          showAuthor={showAuthor}
          author={author}
          authorJobTitle={authorJobTitle}
        />
      </div>
    </article>
  );
};

export default CourseOverview;
