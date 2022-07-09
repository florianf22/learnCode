import * as React from 'react';
import Footer from './Footer';
import Logo from './Logo';

const Container = ({
  children,
  main,
  className,
  footerShown = true,
  ...props
}) => {
  const cls =
    'pt-8 px-20 w-[100vw] min-h-[100vh] bg-bg text-text font-poppins overflow-x-hidden';

  if (main) {
    return (
      <main {...props} className={`${cls} ${className}`}>
        {children}

        <Footer />
      </main>
    );
  }

  return (
    <div
      {...props}
      // className={`${cls} ${className}`}
      className="pt-8 px-20 w-[100vw] min-h-[100vh] bg-bg text-text font-poppins flex flex-col overflow-x-hidden"
    >
      <Logo />
      {children}

      {footerShown && <Footer />}
    </div>
  );
};

export default Container;
