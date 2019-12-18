import { Place } from './place.model';
export interface Place {
  areaName: string;
  address: string;
  email: string;
  pricePerHour: number;
  locLatitude: number;
  locLongitude: number;
  booked: boolean;
  imageUrl: string;
}

export type PlaceViewModel = Place & { id: string };
