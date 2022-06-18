import * as React from 'react';

const GridWrapper = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`grid w-[calc(100vw - 10rem)] gap-x-5 gap-y-[0px] overflow-scroll
       grid-cols-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
