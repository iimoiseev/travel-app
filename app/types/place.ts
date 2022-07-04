type TypeLocation = {
  sity: string;
  country: string;
};

export interface IPlace {
  slug: string;
  location: TypeLocation;
  imagePath: string;
  description: string;
  rating: number;
  duration: string;
  distance: number;
  googleMapLink: string;
  mapImage: string;
}
