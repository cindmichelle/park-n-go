import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Place } from '../model/place.model';

@Injectable({
  providedIn: 'root'
})
export class ManagePlaceService {

  private placesCollection!: AngularFirestoreCollection<Place>;
  private places!: Observable<Place[]>;

  constructor(private db: AngularFirestore) {}

  getPlaces(email: string) {
    this.placesCollection = this.db.collection<Place>('places', ref =>
      ref.where('email', '==', email));

    this.places = this.placesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );

    return this.places;
  }

  getPlace(id: string) {
    return this.placesCollection.doc<Place>(id).valueChanges();
  }

  updatePlace(place: Place, id: string) {
    return this.placesCollection.doc(id).update(place);
  }

  addPlace(place: Place) {
    return this.placesCollection.add(place);
  }

  removePlace(id: string) {
    return this.placesCollection.doc(id).delete();
  }

}
