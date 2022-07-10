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
        <title>learnCode | Login</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container footerShown={false}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          flex flex-col gap-2"
        >
          <h2 className="max-w-[50ch] text-center mb-8 text-lg">
            learnCode offers 912 Programming courses from top instructors and
            organizations to help you gain or enhance your Programming skills.
            Sign in to start learning Programming online for free today!
          </h2>
          <GoogleLoginButton
            onClick={onSignInGoogle}
            className="max-w-[250px] self-center"
          />

          <GithubLoginButton
            onClick={onSignInGithub}
            className="max-w-[250px] self-center"
          />
        </div>
      </Container>
    </div>
  );
}
