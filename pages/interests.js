import * as React from 'react';
import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
// components
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import TagsList from '../components/TagList';

export default function Interests() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedTags, setSelectedTags] = React.useState([]);

  const toggleSelectedTags = tag => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags([...selectedTags.filter(t => t !== tag)]);
    }
  };

  const checkIfTagIsSelected = tag => {
    return selectedTags.find(t => t === tag);
  };

  return (
    <div>
      <Head>
        <title>learnCode</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="flex justify-center mt-12">
          <SearchBar icon="search" />
        </div>

        <TagsList
          toggleSelectedTags={toggleSelectedTags}
          checkIfTagIsSelected={checkIfTagIsSelected}
        />
      </Container>
    </div>
  );
}
