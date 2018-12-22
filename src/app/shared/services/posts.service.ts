import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { map, take } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private collection = '/blogposts';

  constructor(private db: AngularFirestore) {
  }

  public generateId(): string {
    return this.db.createId();
  }

  public getAllPosts(): Observable<any[]> {
    return this.db
      .collection(this.collection)
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      }));
  }

  public getPostById(id: string): Observable<Post> {
    return this.db
      .collection(this.collection)
      .doc<Post>(id)
      .valueChanges();
  }

  // create alias for create/update for better api exposure
  public create = this.update.bind(this);

  public update(post: Post): Promise<boolean> {
    return this.db
      .collection(this.collection)
      .doc<Post>(post.id)
      .set(post, {merge: true})
      .then(() =>  true)
      .catch(() => false);
  }

  public delete(id: string): Promise<boolean> {
    return this.db
    .collection(this.collection)
    .doc(id)
    .delete()
    .then(() => true)
    .catch(() => false);
  }
}
