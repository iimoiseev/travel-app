import React, { FC } from 'react';
import { IPlace } from '@/types/place';
import Layout from '@/common/Layout';
import BookTrip from './BookTrip/BookTrip';
import Header from './Header/Header';
import Information from './Information/Information';
import Wrapper from './Wrapper/Wrapper';
import Meta from '../../../utils/Meta';
interface IPlacePage {
  place: IPlace;
}

export const Place: FC<IPlacePage> = ({ place }) => {
  return (
    <Layout isMaxWidth={true}>
      <Meta
        title={`${place.location.sity} - ${place.location.country}`}
        description={`Best route for travelling - ${place.location.sity}`}
        image={place.imagePath}
      />
      <Wrapper imagePath={place.imagePath}>
        <Header />
        <Information place={place} />
        <BookTrip />
      </Wrapper>
    </Layout>
  );
};

export default Place;
