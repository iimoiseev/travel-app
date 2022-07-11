export type TypeLocation = {
  sity: string;
  country: string;
};

export interface IPlace {
  _id: string;
  slug: string;
  location: TypeLocation;
  imagePath: string;
  description: string;
  rating: number;
  duration: string;
  distance: number;
}

export interface IFav {
  slug: string;
  name: string;
}
