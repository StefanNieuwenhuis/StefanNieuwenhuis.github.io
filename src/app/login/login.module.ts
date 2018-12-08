import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {SpinnerModule} from '../shared/components/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent]
})
export class LoginModule {
}
