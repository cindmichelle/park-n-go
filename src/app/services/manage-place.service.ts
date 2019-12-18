import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Place, PlaceViewModel } from '../model/place.model';

// import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ManagePlaceService {

  private placesCollection!: AngularFirestoreCollection<Place>;
  private places!: Observable<PlaceViewModel[]>;
  private myPlacesCollection!: AngularFirestoreCollection<Place>;
  private myPlaces!: Observable<PlaceViewModel[]>;


  constructor(private db: AngularFirestore) {
  }

  getMyPlaces(email: string) {
    this.myPlacesCollection = this.db.collection<Place>('places', (ref) =>
      ref.where('email', '==', email),
    );

    console.log('Manage place service ts:', this.myPlacesCollection);

    this.myPlaces = this.myPlacesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );

    return this.myPlaces;
  }

  getAllPlaces() {
    this.placesCollection = this.db.collection<PlaceViewModel>('places');

    this.places = this.placesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );

    return this.places;
  }

  getPlace(id: string) {
    return this.placesCollection.doc<Place>(id).valueChanges();
  }

  updatePlace(place: Place, id: string) {
    console.log('UPDATE PLACE', place);
    return this.placesCollection.doc(id).update(place);
  }

  addPlace(place: Place) {
    return this.placesCollection.add(place);
  }

  removePlace(id: string) {
    return this.placesCollection.doc(id).delete();
  }

  updateBookedPlace(id: string, booked: boolean) {
    if (booked) {
      return this.placesCollection.doc(id).update({
        booked: false,
      });
    } else {
      return this.placesCollection.doc(id).update({
        booked: true,
      });
    }
  }
}
