import { Vehicle } from './vehicle.model';
import { Place } from './place.model';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  vehicles: Array<Vehicle>;
  places: Array<Place>;
}

export type UserViewModel = User & {
  id: string;
};
