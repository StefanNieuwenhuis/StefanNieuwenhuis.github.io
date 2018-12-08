import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { UrlHandler } from './handlers/url-handler';
import { PostsHandler } from './handlers/posts-handler';

import { chain, includes } from 'lodash';

@Injectable()
export class MockHttpInterceptor {
    private urlMap: { [url: string]: UrlHandler } = {
        '/blogposts': new PostsHandler()
    };

    // TODO: Implement http-errors

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.info('the following request is intercepted >>>', request);

        return this.matchHandlers(request, next).handle(request);
    }

    private matchHandlers(request: HttpRequest<any>, next: HttpHandler): UrlHandler {
        // TODO: Implement http-errors

        const url = request.url;
        const exactMatch = this.urlMap[url];
        if (exactMatch) {
            return exactMatch;
        }

        const matchingHandlers = chain(this.urlMap)
            .pickBy((value, key) => includes(url, key))
            .values<UrlHandler>()
            .value();

        if (this.matchHandlers.length === 1) {
            return matchingHandlers[0];
        }

        console.info('interceptor found no handler for >>> ', url);
        return next;
    }
}