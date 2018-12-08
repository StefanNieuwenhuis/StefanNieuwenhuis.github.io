import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private db: AngularFirestore) {
  }

  public getAllPosts(): Observable<any[]> {
    return this.db
      .collection('/blogposts')
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, ...data};
        });
      }));
  }

  public getPostById(id: string): Observable<any> {
    return this.db
      .collection('/blogposts')
      .doc(id)
      .valueChanges();
  }
}
