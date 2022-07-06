import * as React from 'react';
import { BarWave } from 'react-cssfx-loading';

const Loader = () => {
  return (
    <BarWave
      color="#201F1F"
      width="20px"
      height="20px"
      duration="750ms"
      className="absolute top-1/2 left-1/2 -translate-x-[20px] -translate-y-[20px]"
    />
  );
};

export default Loader;
