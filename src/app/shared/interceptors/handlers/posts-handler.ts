import { Observable } from 'rxjs';
import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { UrlHandler } from './url-handler';
import { PostGenerator } from '../generators/post-generator';
import { Post } from '../../models/post';

export class PostsHandler implements UrlHandler {
    handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        const postGenerator = new PostGenerator();
        const posts: Post[] = [];

        posts.push(postGenerator.generate({ title: 'POST A' }));
        posts.push(postGenerator.generate({ title: 'POST B' }));
        posts.push(postGenerator.generate({ title: 'POST C' }));
        posts.push(postGenerator.generate({ title: 'POST D' }));
        posts.push(postGenerator.generate({ title: 'POST E' }));

        return Observable.create(response => {
            response.next(new HttpResponse({
                status: 200,
                body: posts
            }));
            response.complete();
        });
    }
}