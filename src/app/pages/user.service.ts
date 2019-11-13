import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { UserViewModel } from './../model/user.model';
import { AsyncStorageService } from './../native/async-storage.service';
import { User } from 'src/app/model/user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  email?: string;
  userObservable: Observable<UserViewModel[]> = [];

  constructor(private storage: Storage, private db: AngularFirestore) {
    this.storage.get('token').then((value) => {
      this.email = value;

      const collection = this.db.collection<User>('users', (ref) =>
        ref.where('email', '==', this.email).limit(1),
      );

      this.userObservable = collection.snapshotChanges().pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }),
      );
    });
  }
  getUser() {
    return this.userObservable;
  }
}
