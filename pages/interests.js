import * as React from 'react';
import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
// components
import Container from '../components/Container';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import TagsList from '../components/TagList';

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
        <div className="flex justify-center mt-12">
          <SearchBar icon="search" />
        </div>

        <TagsList />
      </Container>
    </div>
  );
}
