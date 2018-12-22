import {HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface UrlHandler {
  handle(request: HttpRequest<any>): Observable<HttpEvent<any>>;
}
