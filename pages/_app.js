import { AuthProvider } from '../context/auth';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </AuthProvider>
  );
}

export default MyApp;
