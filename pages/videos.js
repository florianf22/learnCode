import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// components
import Container from '../components/Container';
import Videos from '../components/Videos/Videos';

const Interests = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>learnCode | Videos</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Videos />
      </Container>
    </div>
  );
};

export default Interests;
