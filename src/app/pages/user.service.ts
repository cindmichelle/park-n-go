import { PlaceViewModel } from './../model/place.model';
import { VehicleViewModel } from './../model/vehicle.model';
import { Observable } from 'rxjs';
import { UserViewModel } from './../model/user.model';
import { User } from 'src/app/model/user.model';
import { Place } from 'src/app/model/place.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Vehicle } from '../model/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // loggedUserToken: string;
  userObservable!: Observable<UserViewModel[]>;
  vehiclesObservable!: Observable<VehicleViewModel[]>;
  placesObservable!: Observable<PlaceViewModel[]>;

  constructor(private db: AngularFirestore) {}

  getAllUserInfo(key: string) {
    const userCollection = this.db.collection<User>('users', (ref) =>
      ref.where('email', '==', key).limit(1),
    );

    this.userObservable = userCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );

    const vehiclesCollection = this.db.collection<Vehicle>('vehicles', (ref) =>
      ref.where('email', '==', key),
    );

    this.vehiclesObservable = vehiclesCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );

    const placesCollection = this.db.collection<Place>('places', (ref) =>
      ref.where('email', '==', key),
    );

    this.placesObservable = placesCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );
  }

  getUser() {
    return this.userObservable;
  }

  getVehicles() {
    return this.vehiclesObservable;
  }

  getPlaces() {
    return this.placesObservable;
  }

  editUserProfile(id: string, userEmail: string, userFirstName: string, userLastName: string, userPhoneNo: string) {
    console.log('editing user info . . .')
    console.log(id);
    this.db.doc<User>('users/' + id).update({
      // email: userEmail,
      // Email Belum bisa diganti
      firstName: userFirstName,
      lastName: userLastName,
      phoneNo: userPhoneNo,
    }).then(r => r);
  }
}
