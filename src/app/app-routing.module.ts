import {AuthGuard} from './shared/guards/auth.guard';
import {PostsComponent} from './posts/posts.component';
import {AboutComponent} from './about/about.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post/post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
