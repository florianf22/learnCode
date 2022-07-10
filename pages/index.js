import * as React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter, withRouter } from 'next/router';
import Masonry from 'react-masonry-component';

import Container from '../components/Container';
import Heading from '../components/Heading';
import CourseOverview from '../components/CourseOverview';
import Loader from '../components/Loader';

import { GRID_OPTIONS } from '../constants';

import { fetchCourses } from '../app/backend-helpers';
import { getQueryParamsData } from '../lib';
import useAuth from '../hooks/useAuth';

const Home = ({ data }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [fetchedData, setFetchedData] = React.useState([]);

  const isLoading = React.useMemo(
    () => status === 'loading' || status === 'unauthenticated',
    [status],
  );

  React.useEffect(() => {
    (async () => {
      const interests = getQueryParamsData(router.asPath);

      if (interests) {
        const courses = await fetchCourses(interests);
        setFetchedData(courses);
      }
    })();
  }, [router.asPath]);

  useAuth();

  return (
    <div>
      <Head>
        <title>learnCode</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container footerShown={!isLoading}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Heading>Latest Updates</Heading>

            <Masonry
              options={{
                gutter: 20,
                fitWidth: true,
                columnWidth: 300,
                horizontalOrder: true,
                percentPosition: true,
              }}
              className="pt-12 pb-20 absolute m-auto min-w-[calc(100vw - 10rem)]"
            >
              {fetchedData.length > 0
                ? fetchedData.map((course, i) => (
                    <CourseOverview
                      key={course.id}
                      course={course}
                      {...GRID_OPTIONS[i % GRID_OPTIONS.length]}
                    />
                  ))
                : data.map((course, i) => (
                    <CourseOverview
                      key={course.id}
                      course={course}
                      {...GRID_OPTIONS[i % GRID_OPTIONS.length]}
                    />
                  ))}
            </Masonry>
          </>
        )}
      </Container>
    </div>
  );
};

export default withRouter(Home);

export async function getStaticProps() {
  const data = await fetchCourses();

  return { props: { data }, revalidate: 20 };
}
