import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Logo = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <div className="relative w-52 h-14 cursor-pointer" onClick={navigateToHome}>
      <Image
        src="/logo.svg"
        alt="logo"
        layout="fill"
        className="object-cover -translate-y-1"
      />
    </div>
  );
};

export default Logo;
