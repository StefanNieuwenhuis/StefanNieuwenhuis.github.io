import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {SpinnerModule} from '../shared/components/spinner/spinner.module';
import {ManagePostsComponent} from './manage-posts/manage-posts.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    FormsModule
  ],
  exports: [AdminComponent],
  declarations: [AdminComponent, ManagePostsComponent]
})
export class AdminModule {
}
