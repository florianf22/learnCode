import * as React from 'react';
import Head from 'next/head';
import GoogleButton from 'react-google-button';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
// components
import Container from '../components/Container';

export default function Auth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [router, status]);

  const onSignIn = async e => {
    try {
      await signIn('google');
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Head>
        <title>learnCode</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <GoogleButton
          onClick={onSignIn}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </Container>
    </div>
  );
}
