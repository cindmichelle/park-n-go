export interface Vehicle {
  vehicleType: 'Motorcycle' | 'Car';
  vehicleModel: string;
  plateNo: string;
  email: string;
}

export type VehicleViewModel = Vehicle & {
  id: string;
};
