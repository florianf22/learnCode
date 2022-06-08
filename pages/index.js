import * as React from 'react';
import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
// components
import Container from '../components/Container';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import CourseOverview from '../components/CourseOverview';

export default function Home({ data }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(status);

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
        <Logo />
        <Heading>Latest Updates</Heading>

        <CourseOverview course={data[8]} />

        <button onClick={signOut}>log out man</button>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/course`);
  const data = await res.json();

  return { props: { data } };
}
