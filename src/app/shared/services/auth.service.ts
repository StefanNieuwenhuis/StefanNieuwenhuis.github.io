import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { tap, delay, first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn$: Observable<boolean>;
  public redirectUrl: string;
  public authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState.pipe(first());
    this.isLoggedIn$ = this.afAuth.authState
    .pipe(
      first(),
      map(user => user ? true : false)
    );
  }

  public login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password);
  }

  public logout(): void {
    this.afAuth.auth.signOut();
  }
}
