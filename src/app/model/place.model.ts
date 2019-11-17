import { Place } from './place.model';
export interface Place {
  areaName: string;
  address: string;
  email: string;
  pricePerHour: number;
  locLatitude: string;
  locLongitude: string;
}

export type PlaceViewModel = Place & { id: string };
