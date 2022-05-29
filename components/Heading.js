import * as React from 'react';

const Heading = ({ children, level = 1, className, ...props }) => {
  const Tag = `h${level}`;

  return (
    <Tag
      {...props}
      className={`text-center font-bold text-2xl tracking-wide underline
        underline-offset-0 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;
