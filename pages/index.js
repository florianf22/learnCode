import * as React from 'react';
import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
// components
import Container from '../components/Container';
import Heading from '../components/Heading';
import CourseOverview from '../components/CourseOverview';
import GridWrapper from '../components/GridWrapper';

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

        <GridWrapper>
          {data.map(course => (
            <CourseOverview key={course.id} course={course} />
          ))}
        </GridWrapper>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/course`);
  const data = await res.json();

  return { props: { data }, revalidate: 10, fallback: false };
}
