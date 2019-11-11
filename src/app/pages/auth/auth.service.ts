import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
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
  userRef: any;
  private userCollection: AngularFirestoreCollection<User>;

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.userCollection = this.db.collection<User>('users');
  }

  signup(email: string, password: string) {
    const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
    const body = { email, password, returnSecureToken: true };

    return this.http.post<AuthResponse>(endpoint, body);
  }

  login(email: string, password: string) {
    const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;

    const body = {
      email,
      password,
      returnSecureToken: true,
    };

    const response = this.http.post<AuthResponse>(endpoint, body);
    console.log(response);

    return response;
  }

  async addNewUser(newUser: User) {
    await this.userCollection.add(newUser);
  }
}
