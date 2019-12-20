import { BookingViewModel } from './../../model/booking.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AsyncStorageService } from '../../native/async-storage.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Bookings } from '../../model/booking.model';

type SegmentedValue = 'parking' | 'places';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  segmentedValue: SegmentedValue;

  private email!: string;
  private placeHistoryCollection!: AngularFirestoreCollection<Bookings>;
  private vehicleHistoryCollection!: AngularFirestoreCollection<Bookings>;
  placeHistory: BookingViewModel[] = [];
  vehicleHistory: BookingViewModel[] = [];
  address!: string;

  constructor(
    private storage: AsyncStorageService,
    private db: AngularFirestore,
    private router: Router,
  ) {
    this.segmentedValue = 'parking';
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.email = await this.storage.get('token');

    await this.getPlaceHistory();
    await this.getVehicleHistory();
  }

  getPlaceHistory() {
    this.placeHistoryCollection = this.db.collection<Bookings>(
      'bookings',
      (ref) => ref.where('placeEmailOwner', '==', this.email),
    );

    const pHistory = this.placeHistoryCollection.snapshotChanges().pipe(
      map((action) => {
        return action.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      }),
    );

    pHistory.subscribe((res) => {
      console.log('ini owner', res[0].placeEmailOwner);

      this.placeHistory = res;

      console.log(this.placeHistory);
    });
  }

  getVehicleHistory() {
    this.vehicleHistoryCollection = this.db.collection<Bookings>(
      'bookings',
      (ref) => ref.where('customerEmail', '==', this.email),
    );

    const vHistory = this.vehicleHistoryCollection.snapshotChanges().pipe(
      map((action) => {
        return action.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );

    vHistory.subscribe((res) => {
      this.vehicleHistory = res;
    });
  }

  onVehicleClick(idx: number) {
    if (this.vehicleHistory[idx].ongoing) {
      const {
        placeEmailOwner,
        placeId,
        customerPlateNo,
        vehicleId,
        vehicleType,
        vehicleModel,
        duration,
        totalPrice,
        arrivalDateTime,
        leavingDateTime,
        createdAt,
        id: bookId,
      } = this.vehicleHistory[idx];

      this.router.navigate([
        '/',
        'tabs',
        'history',
        'vehicle',
        bookId,
        placeEmailOwner,
        placeId,
        customerPlateNo,
        vehicleId,
        vehicleType,
        vehicleModel,
        duration,
        totalPrice,
        arrivalDateTime,
        leavingDateTime,
        createdAt,
      ]);
    }
  }

  onPlaceClick(idx: number) {
    if (this.placeHistory[idx].ongoing) {
      const {
        customerEmail,
        customerPlateNo,
        vehicleModel,
        vehicleType,
        address,
        placeName,
        duration,
        totalPrice,
        arrivalDateTime,
        createdAt,
        leavingDateTime,
      } = this.placeHistory[idx];
      this.router.navigate([
        '/',
        'tabs',
        'history',
        'place',
        customerEmail,
        customerPlateNo,
        vehicleModel,
        vehicleType,
        address,
        placeName,
        duration,
        totalPrice,
        arrivalDateTime,
        createdAt,
        leavingDateTime,
      ]);
    }
  }
}
