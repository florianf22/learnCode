import * as React from 'react';

const Dots = ({ className }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {[0, 1, 2].map(idx => {
        return (
          <div key={idx} className="h-[9px] w-[9px] bg-black rounded-full" />
        );
      })}
    </div>
  );
};

export default Dots;
