import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { formatAsPath } from '../../lib';

export default function Course() {
  const router = useRouter();

  console.log(formatAsPath(router.asPath));

  return (
    <div>
      <Head>
        <title>learnCode</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hi</div>
      <h1></h1>
    </div>
  );
}
