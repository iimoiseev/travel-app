import { IPlace } from '../../app/types/place';
import japanImg from '../../assets/image/a0002487_main.jpg';
import {
  NextApiRequest,
  NextApiResponse,
} from '../../node_modules/next/dist/shared/lib/utils';
const places: IPlace[] = [
  {
    slug: 'tokyo',
    location: 'Japan',
    imagePath: japanImg.src,
    description: 'description',
    rating: 5,
    duration: '10 day',
    distance: 10555,
    googleMapLink: 'string',
    mapImage: 'hi',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places);
}
