import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import firebase from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$ = this.angularFireAuth.user;

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  public loginWithGoogle(): Observable<UserCredential> {
    // TODO implement me
    return of(null)
  }
}
