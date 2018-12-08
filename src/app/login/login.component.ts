import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from './../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoggedIn: boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.isLoggedIn = true;
    this.authService.afAuth.authState.subscribe(auth => {
      auth !== null
        ? this.router.navigate(['/admin'])
        : this.isLoggedIn = false;
    });
  }

  public login() {
    // YsT3qr6I7b$q020C@iPkV
    this.authService.login(this.emailFormControl.value, this.passwordFormControl.value)
      .then(response => {
        console.log('success!', response);
        this.router.navigate(['/admin']);
      })
      .catch(err => console.error(err.message));
  }

  public logout() {
    this.authService.logout();
  }

}
