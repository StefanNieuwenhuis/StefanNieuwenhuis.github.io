import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SpinnerModule
  ],
  declarations: [LoginComponent, LogoutComponent]
})
export class AuthModule { }
