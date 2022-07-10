import * as React from 'react';
import Image from 'next/image';
import AuthorInfo from './AuthorInfo';
import Dots from './Dots';
import Link from 'next/link';

const Course = ({ course }) => {
  const {
    url,
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
    <article className="mt-6 flex flex-col items-center">
      <h1 className="font-bold text-3xl">{title}</h1>

      <div className="mt-14 flex gap-4 items-center">
        <div
          className={`relative h-[50px] w-[50px] rounded-full overflow-hidden`}
        >
          <Image
            src={avatarUrl}
            alt="Author photo"
            layout="fill"
            className="object-fill"
          />
        </div>

        {author && (
          <AuthorInfo
            showAuthor="name"
            author={author}
            authorJobTitle={authorJobTitle}
          />
        )}
      </div>

      <Dots className="mt-10" />

      <div className={`relative mt-10  h-[335px] w-[558px]`}>
        <Image
          src={image_480x270}
          alt="Course photo"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <p className="mt-12 self-start">{headline}</p>

      <p className="mt-6 self-start">
        To take the course on the official website, please follow the{' '}
        <Link href={`https://udemy.com${url}`} target="_blank">
          <a className="bg-primary text-bg p-[1px]">link.</a>
        </Link>
      </p>
    </article>
  );
};

export default Course;
