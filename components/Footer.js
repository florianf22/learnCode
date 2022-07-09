import Image from 'next/image';
import * as React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center h-24 mt-auto">
      <h3>
        Thanks for{' '}
        <span className="border-b border-primary text-primary">coming!</span>
      </h3>

      <h3>support@learncode.com</h3>

      <div className="flex gap-2">
        <Image
          src={`/icons/twitter.svg`}
          width={28}
          height={28}
          alt={`twitter icon`}
        />

        <Image
          src={`/icons/github.svg`}
          width={28}
          height={28}
          alt={`github icon`}
        />

        <Image
          src={`/icons/figma.svg`}
          width={28}
          height={28}
          alt={`figma icon`}
        />
      </div>
    </footer>
  );
};

export default Footer;
