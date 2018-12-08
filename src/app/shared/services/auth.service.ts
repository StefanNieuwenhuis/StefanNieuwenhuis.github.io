import {AngularFireAuth} from 'angularfire2/auth';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authState: any = null;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => this.authState = auth);
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  public login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password);
  }

  public logout() {
    this.afAuth.auth.signOut();
  }
}
