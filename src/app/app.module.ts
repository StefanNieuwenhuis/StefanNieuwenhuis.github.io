import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './shared/services/auth.service';
import {MockHttpInterceptor} from './shared/interceptors/mock-http.interceptor';
import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {LoginModule} from './login/login.module';
import {AdminModule} from './admin/admin.module';
import {PostsModule} from './posts/posts.module';
import {AboutModule} from './about/about.module';
import { FirstSentencePipe } from './shared/pipes/first-sentence.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    LoginModule,
    CoreModule,
    AboutModule,
    PostsModule
  ],
  providers: [
    AuthService,
    environment.useMockBackend === true
      ? {provide: HTTP_INTERCEPTORS, useClass: MockHttpInterceptor, multi: true}
      : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
