import * as React from 'react';

const useLoading = (value = true) => {
  const [loading, setLoading] = React.useState(value);

  const toggleLoading = React.useCallback(() => {
    setLoading(!loading);
  });

  return [loading, toggleLoading];
};

export default useLoading;
