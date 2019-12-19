export interface Bookings {
  customerEmail: string;
  customerPlateNo: string;
  placeId: string;
  placeEmailOwner: string;
  duration: string;
  arrivalDateTime: string;
  leavingDateTime: string;
  totalPrice: string;
  createdAt: string;
  ongoing: boolean;
  placeName: string;
  address: string;
  vehicleModel: string;
  vehicleType: string;
}

export type BookingViewModel = Bookings & { id: string };

// jenis kendaraan, nama kendaraan, nama tempat, alamat,
