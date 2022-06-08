import * as React from 'react';
import Logo from './Logo';

const Container = ({ children, main, className, ...props }) => {
  const cls = 'pt-8 px-20 h-[100vh] w-[100vw] bg-bg text-text font-poppins';

  if (main) {
    return (
      <main {...props} className={`${cls} ${className}`}>
        {children}
      </main>
    );
  }

  return (
    <div
      {...props}
      // className={`${cls} ${className}`}
      className="pt-8 px-20 h-[100vh] w-[100vw] bg-bg text-text font-poppins"
    >
      <Logo />
      {children}
    </div>
  );
};

export default Container;