import * as React from 'react';

const GridWrapper = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`grid grid-cols-5 gap-10 bg-red-500 overflow-scroll ${className}`}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
