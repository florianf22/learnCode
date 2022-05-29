import Image from 'next/image';
import * as React from 'react';

const Logo = () => {
  return (
    <div className="relative w-52 h-14 ">
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
