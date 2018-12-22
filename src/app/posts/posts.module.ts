import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PostsComponent} from './posts.component';
import {PostsService} from '../shared/services/posts.service';
import {SpinnerModule} from '../shared/components/spinner/spinner.module';
import {FirstSentencePipe} from '../shared/pipes/first-sentence.pipe';
import {groupBy} from 'lodash';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    RouterModule
  ],
  exports: [PostsComponent],
  declarations: [PostsComponent, FirstSentencePipe],
  providers: [PostsService]
})
export class PostsModule {
}
