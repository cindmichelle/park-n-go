import { UserViewModel } from './../model/user.model';
import { AsyncStorageService } from './../native/async-storage.service';
import { User } from 'src/app/model/user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  email?: string;
  loadedUser?: UserViewModel;

  constructor(
    private storage: AsyncStorageService,
    private db: AngularFirestore,
  ) {
    this.initUser();
  }

  async initUser() {
    this.email = await this.storage.get('token');

    const collection = await this.db
      .collection<User>('users', (ref) =>
        ref.where('email', '==', this.email).limit(1),
      )
      .snapshotChanges()
      .pipe();

    await collection.subscribe((docs) => {
      docs.map((doc) => {
        const data = doc.payload.doc.data();
        const id = doc.payload.doc.id;

        console.log('DATAAAA : ', data);

        this.loadedUser = { id, ...data };
      });
    });
  }

  getUser() {
    return this.loadedUser;
  }
}
