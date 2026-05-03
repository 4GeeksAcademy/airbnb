export interface Room {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  hostName: string;
  yearsHosting: number;
  amenities: string[];
  photos: string[];
  maxGuests: number;
}