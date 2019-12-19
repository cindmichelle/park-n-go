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

export const placeInitialValue: PlaceViewModel = {
  areaName: '',
  address: '',
  email: '',
  pricePerHour: 0,
  locLatitude: 0,
  locLongitude: 0,
  booked: false,
  id: '',
};
