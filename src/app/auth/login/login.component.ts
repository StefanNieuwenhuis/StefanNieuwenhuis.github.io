import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoggedIn = false;
  public redirectUrl: string = null;

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
    this.authService.isLoggedIn$
      .subscribe(response => {
        this.redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        if (response) {
          this.isLoggedIn = true;
          this.router.navigate([this.redirectUrl]);
        }
      }, err => console.error(err));
  }

  public login() {
    this.authService.login(this.emailFormControl.value, this.passwordFormControl.value)
      .then(response => {
        console.log('success!', response);
        console.log('success!', this.redirectUrl);
        this.router.navigate([this.redirectUrl]);
      })
      .catch(err => console.error(err.message));
  }
}
