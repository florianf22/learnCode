import * as React from 'react';
import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import { useRouter, withRouter } from 'next/router';
// components
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import TagsList from '../components/TagList';
import Button from '../components/Button';

import { TAGS } from '../constants';
import useAuth from '../hooks/useAuth';

const Interests = () => {
  const router = useRouter();

  const [tags, setTags] = React.useState(TAGS);
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [search, setSearch] = React.useState('');

  useAuth();

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

  const onSearchTermChange = e => {
    setSearch(e.target.value);
    //filter tags
    setTags(
      TAGS.filter(tag =>
        tag.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };

  const navigateToHomePage = () => {
    router.push({
      query: {
        data: JSON.stringify(selectedTags),
      },
      pathname: '/',
    });
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
          <SearchBar
            icon="search"
            value={search}
            onChange={onSearchTermChange}
          />
        </div>

        <TagsList
          toggleSelectedTags={toggleSelectedTags}
          checkIfTagIsSelected={checkIfTagIsSelected}
          tags={tags}
        />

        <Button className="mt-auto" onClick={navigateToHomePage}>
          Proceed with chosen interests
        </Button>
      </Container>
    </div>
  );
};

export default Interests;
