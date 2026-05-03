export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  badge?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}