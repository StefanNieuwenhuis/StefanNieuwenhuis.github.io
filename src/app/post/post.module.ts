import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post.component';
import {SpinnerModule} from '../shared/components/spinner/spinner.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SpinnerModule
  ],
  exports: [PostComponent],
  declarations: [PostComponent]

})
export class PostModule {
}
