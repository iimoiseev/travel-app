import Layout from '../app/components/common/Layout';
import { NextPage, GetStaticProps } from 'next';
import { IPlace } from '../app/types/place';
import Search from '../app/components/elements/Search/Search';
import Filters from '../app/components/elements/Filters/Filters';
import HeadingSearchSection from '../app/components/elements/Home/HeadingSearchSection/HeadingSearchSection';
import { Api_Url } from '../app/constants';
import PopularPlaces from '../app/components/elements/Home/PopularPlaces/PopularPlaces';
import { useState } from 'react';

interface IHome {
  initialPlaces: IPlace[];
}

const Home: NextPage<IHome> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState(initialPlaces);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Layout>
      <HeadingSearchSection />
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Search
          setPlaces={setPlaces}
          initialPlaces={initialPlaces}
          setIsLoading={setIsLoading}
        />
        <Filters setPlaces={setPlaces} initialPlaces={initialPlaces} />
        <PopularPlaces places={places} isLoading={isLoading} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch(`${Api_Url}/places`);
  const initialPlaces = await result.json();
  return {
    props: {
      initialPlaces,
    },
  };
};
export default Home;
