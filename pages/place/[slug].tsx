import React from 'react';
import Layout from '../../app/components/common/Layout';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Api_Url } from '../../app/constants';
import { IPlace } from '../../app/types/place';

interface IPlacePage {
  place: IPlace;
}

const Place: NextPage<IPlacePage> = ({ place }) => {
  return <Layout>Place {place.slug}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${Api_Url}/places`);
  const places = await res.json();

  const paths = places.map((post: IPlace) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${Api_Url}/places/${params.slug}`);
  const place = await res.json();

  return { props: { place } };
};

export default Place;
