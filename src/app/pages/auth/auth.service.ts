import { UserViewModel } from './../../model/user.model';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

import { map} from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  userRef: any;
  private userCollection: AngularFirestoreCollection<User>;
  private user: Observable<UserViewModel[] | UserViewModel> = {
    // @ts-ignore
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    vehicles: [],
    places: [],
  };

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.userCollection = this.db.collection<User>('users');
    this.user = this.userCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );

    // const snapshotResult = this.db
    //   .collection('users', (ref) => ref.where('email', '==', '').limit(1))
    //   .snapshotChanges()
    //   .pipe(flatMap((users) => users));

    // snapshotResult.subscribe((doc) => {
    //   const data = doc.payload.doc.data() as User;
    //   this.userRef = doc.payload.doc.ref;
    //   this.user = { ...data };
    // });
  }
  signup(email: string, password: string) {
    const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
    const body = { email, password, returnSecureToken: true };

    return this.http.post<AuthResponse>(endpoint, body);
  }

  login(email: string, password: string) {
    this.isAuthenticated = true;
    const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;

    const body = {
      email,
      password,
      returnSecureToken: true,
    };

    const response = this.http.post<AuthResponse>(endpoint, body);
    console.log(response);
  }

  logout() {
    // firebase logout API here
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
  }

  async addNewUser(newUser: User) {
    await this.userCollection.add(newUser);

    this.user = this.db
      .collection<User>('users', (ref) =>
        ref.where('email', '==', newUser.email).limit(1),
      )
      .snapshotChanges()
      .pipe(
        map((users) => {
          const data = users[0].payload.doc.data();
          const id = users[0].payload.doc.id;
          return { id, ...data };
        }),
      );

    // const snapshotResult = await this.db
    //   .collection('users', (ref) =>
    //     ref.where('email', '==', newUser.email).limit(1),
    //   )
    //   .snapshotChanges()
    //   .pipe(flatMap((users) => users));

    // snapshotResult.subscribe((doc) => {
    //   const data = doc.payload.doc.data() as User;
    //   this.userRef = doc.payload.doc.ref;
    //   this.user = { ...data };
    // });

    console.log('THIS USER FROM ADD NEW USER', this.user);
  }

  getUser() {
    return this.user;
  }
}
