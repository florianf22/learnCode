import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { formatAsPath } from '../../lib';
import { fetchCourse, fetchCourses } from '../../api/backend-helpers';
import Error from 'next/error';
import Container from '../../components/Container';
import CourseComponent from '../../components/Course';

export default function Course({ data }) {
  const router = useRouter();

  const id = React.useMemo(() => formatAsPath(router.asPath), [router.asPath]);

  if (!data?.course) {
    return <Error title="Course could not be found" />;
  }

  return (
    <div>
      <Head>
        <title>{data.course.title}</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <CourseComponent course={data.course} />
      </Container>
    </div>
  );
}

export const getServerSideProps = async context => {
  const id = context.params?.id;

  const course = await fetchCourse(id);

  if (!course) {
    return {
      props: {
        data: null,
      },
    };
  }

  return {
    props: {
      data: course,
    },
  };
};

// export const getStaticProps = async context => {
//   const id = context.params?.id;

//   const course = await fetchCourse(id);

//   if (!course) {
//     return {
//       props: {
//         data: null,
//       },
//     };
//   }

//   return {
//     props: {
//       data: course,
//     },
//     revalidate: 20,
//   };
// };

// export const getStaticPaths = async () => {
//   const data = await fetchCourses();

//   const paths = data.map(course => ({
//     params: { id: course.published_title },
//   }));

//   return {
//     paths,
//     fallback: false, // false or 'blocking'
//   };
// };

//
