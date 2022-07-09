import * as React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`first-letter:inline-block px-6 py-2.5 bg-primary
      text-bg font-medium text-base leading-tight 
      rounded-full shadow-md hover:primary 
      hover:shadow-lg focus:primary 
      focus:shadow-lg focus:outline-none focus:ring-0 
      active:bg-primary active:shadow-lg transition duration-150 ease-in-out self-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
