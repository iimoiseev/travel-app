import { IPlace } from '../../../app/types/place';

import { NextApiRequest, NextApiResponse } from 'next/dist/shared/lib/utils';

export const places: IPlace[] = [
  {
    slug: 'Kyoto',
    location: { country: 'Japan', sity: 'Kyoto' },
    imagePath: `/images/places/Japan.jpg`,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
    rating: 5,
    duration: '10 day',
    distance: 10555,
    googleMapLink: 'string',
    mapImage: 'hi',
  },
  {
    slug: 'Venezia',
    location: { country: 'Italy', sity: 'Venezia' },
    imagePath: `/images/places/Italy.jpg`,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
    rating: 4,
    duration: '11 day',
    distance: 1555,
    googleMapLink: 'string',
    mapImage: 'hi',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places);
}
