import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Vehicle } from '../model/vehicle.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncStorageService } from '../native/async-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ManageVehicleService {

  private vehicleCollection: AngularFirestoreCollection<Vehicle>;
  private vehicles!: Observable<Vehicle[]>;

  constructor(db: AngularFirestore, private storage: AsyncStorageService) {
    this.vehicleCollection = db.collection<Vehicle>('vehicles', ref =>
      ref.where('email', '==', 'asd@asd.com'),
    );
  }

  async getEmailUser() {
    await this.storage.get('token');

    // return this.db.collection<Vehicle>('vehicles', ref =>
    //   ref.where('email', '==', this.getEmailUser()),
    // );
  }

  async getVehicles() {
    this.vehicles = await this.vehicleCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          // return { ...data };
        });
      }),
    );

    return this.vehicles;
  }

  addVehicles(emailOwner: string, plate: string, model: string, type: string) {
    return this.vehicleCollection.add({
      vehicleType: type === 'car' ? 'Car' : 'Motorcycle',
      vehicleModel: model,
      email: emailOwner,
      plateNo: plate,
    });
  }

  editVehicle(emailOwner: string, plate: string, model: string, type: string, id: string | null) {
    console.log('Edit Vehicle Service');
    // @ts-ignore
    return this.vehicleCollection.doc<Vehicle>(id).update({
      email: emailOwner,
      vehicleModel: model,
      vehicleType: type === 'Car' ? 'Car' : 'Motorcycle',
      plateNo: plate
    });
  }

  deleteVehicle(id: string){
    return this.vehicleCollection.doc<Vehicle>(id).delete();
  }
}
