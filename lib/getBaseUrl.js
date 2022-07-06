export const getBaseUrl = () => {
  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }

  return 'https://learn-code-two.vercel.app/';
};
