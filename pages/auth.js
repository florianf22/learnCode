import * as React from 'react';
import Head from 'next/head';
import GoogleButton from 'react-google-button';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
// components
import Container from '../components/Container';
import {
  GithubLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';

export default function Auth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'authenticated') {
      router.push('/interests');
    }
  }, [router, status]);

  const onSignInGoogle = async () => {
    try {
      await signIn('google');
    } catch (err) {
      console.error(err);
    }
  };

  const onSignInGithub = async () => {
    try {
      await signIn('github');
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

      <Container footerShown={false}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          flex flex-col gap-2"
        >
          <GoogleLoginButton
            onClick={onSignInGoogle}
            className="min-w-[250px]"
          />

          <GithubLoginButton
            onClick={onSignInGithub}
            className="min-w-[250px]"
          />
        </div>
      </Container>
    </div>
  );
}
