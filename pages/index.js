import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/Container';
import logo from '../public/logo.png';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import CourseOverview from '../components/CourseOverview';

const DUMMY_COURSE_DATA = {
  imageUrl:
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  title: 'Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)',
  description:
    'Whether you are just starting to learn or want to advance your skills, Zero To Mastery will teach you React, JavaScript, Python, CSS and so many more in-demand skills to help you get hired',
  author: 'Andrei Neagoie',
  date: new Date('2020-01-01'),
  avatarUrl: 'https://img-c.udemycdn.com/user/200_H/38516954_b11c_3.jpg',
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>learnCode</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Logo />
        <Heading>Latest Updates</Heading>

        <CourseOverview course={DUMMY_COURSE_DATA} />
      </Container>
    </div>
  );
}
