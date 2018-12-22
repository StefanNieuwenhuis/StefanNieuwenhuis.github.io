import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  // constructor(private router: Router, private authService: AuthService) { }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return this.authService.afAuth.authState
  //     .pipe(
  //       take(1),
  //       map((authState) => !!authState),
  //       tap(authenticated => {
  //         if (!authenticated) {
  //           this.router.navigate(['login']);
  //         }
  //       })
  //     );
  // }

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('AuthGuard#canActivate called');

    let url = state.url;
    console.log('logged in?', this.checkLogin(url));
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('AuthGuard#canActivateChild called');
    return this.canActivate(route, state);
  }

  canLoad(route: Route): Observable<boolean> {
    console.log('AuthGuard#canLoad called');
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): Observable<boolean> {
    return this.authService.isLoggedIn$.pipe(
      tap(user => {
        if (user){
          return true;
        }else{
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
