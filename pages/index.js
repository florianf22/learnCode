import * as React from 'react';
import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Masonry from 'react-masonry-component';
// components
import Container from '../components/Container';
import Heading from '../components/Heading';
import CourseOverview from '../components/CourseOverview';
import GridWrapper from '../components/GridWrapper';

const GRID_OPTIONS = [
  {},
  {
    showAuthor: false,
  },
  {
    showCourseCover: true,
    span: true,
  },
  {
    showCourseCover: true,
    showAuthor: 'name',
    showDescription: false,
  },
  {
    showCourseCover: true,
    showAuthor: 'name',
  },
  {},
  {},
  {
    showAuthor: false,
  },
];

export default function Home({ data }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth');
    }
  }, [router, status]);

  return (
    <div>
      <Head>
        <title>learnCode</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Heading>Latest Updates</Heading>

        <Masonry
          options={{
            gutter: 20,
            fitWidth: true,
            columnWidth: 300,
            horizontalOrder: true,
            percentPosition: true,
          }}
          className="pt-12 pb-20 absolute m-auto min-w-[calc(100vw - 10rem)]"
        >
          {data.map((course, i) => (
            <CourseOverview
              key={course.id}
              course={course}
              {...GRID_OPTIONS[i % GRID_OPTIONS.length]}
            />
          ))}
        </Masonry>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/course`);
  const data = await res.json();

  return { props: { data, revalidate: 10, fallback: false } };
}
