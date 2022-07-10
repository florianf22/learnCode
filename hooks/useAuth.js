import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import * as React from 'react';

const useAuth = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth');
    }
  }, [status, router]);
};

export default useAuth;
