import { IPlace } from '../../../app/types/place';

import { NextApiRequest, NextApiResponse } from 'next/dist/shared/lib/utils';

export const places: IPlace[] = [
  {
    slug: 'Kyoto',
    location: { country: 'Japan', sity: 'Kyoto' },
    imagePath: `/images/places/Japan.jpg`,
    description: 'description',
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
    description: 'description',
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
