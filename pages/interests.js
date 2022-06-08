import * as React from 'react';
import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
// components
import Container from '../components/Container';
import Logo from '../components/Logo';

export default function Home({ data }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>learnCode</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Logo />
      </Container>
    </div>
  );
}
