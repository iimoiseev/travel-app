import Layout from '../app/components/common/Layout';
import { NextPage, GetStaticProps } from 'next';
import { IPlace } from '../app/types/place';

interface IHome {
  places: IPlace[];
}
const Home: NextPage<IHome> = ({ places }) => {
  return <Layout>{places.map((item: IPlace) => item.location)}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch('http:localhost:3000/api/places');
  const places = await result.json();

  return {
    props: {
      places,
    },
  };
};
export default Home;
