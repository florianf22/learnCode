export const getQueryParamsData = asPath => {
  const queryParams = new URLSearchParams(asPath.split('?')[1]);

  if (queryParams.has('data')) {
    const interests = JSON.parse(queryParams.get('data'));

    return interests;
  }

  return undefined;
};
