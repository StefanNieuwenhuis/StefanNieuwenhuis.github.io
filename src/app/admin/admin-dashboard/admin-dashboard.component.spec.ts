// import { Post } from './../../shared/models/post';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { of, BehaviorSubject } from 'rxjs';
// import { AdminDashboardComponent } from './admin-dashboard.component';

// import { PostsService } from './../../shared/services/posts.service';
// import { PostGenerator } from '../../shared/interceptors/generators/post-generator';

// const postGenerator = new PostGenerator();

// function generatedMockedPosts(numberOfPosts: number, data?: Partial<Post>): Post[] {
//   const posts = [];
//   for (let i = 0; i < numberOfPosts; i++) {
//     posts.push(postGenerator.generate(data || {}));
//   }
//   return posts;
// }

// const storeStub = {
//   doc() {
//     return {
//       snapshotChanges() {
//         return of({property: 'test'});
//       }
//     };
//   },
//   collection() {
//     return {
//       snapshotChanges(){
//         return of({})
//       }
//     }
//   }
// };

// const collectionStub = {
//   snapshotChanges: jasmine.createSpy('valueChanges').and.returnValue(of(generatedMockedPosts(5)))
// }

// const angularFirestoreStub = {
//   collection: jasmine.createSpy('collection').and.returnValue(collectionStub),
//   doc: jasmine.createSpy('doc').and.returnValue(of({}))
// }

// fdescribe('AdminDashboardComponent', () => {
//   let component: AdminDashboardComponent;
//   let fixture: ComponentFixture<AdminDashboardComponent>;
//   let service: PostsService;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [AdminDashboardComponent],
//       providers: [{ provide: AngularFirestore, useValue: storeStub }],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AdminDashboardComponent);
//     component = fixture.componentInstance;
//     service = TestBed.get(PostsService);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should retrieve the list of posts', fakeAsync(() => {
//     const mockedPosts = generatedMockedPosts(5);

//     spyOn(service, 'getAllPosts').and.returnValue(of(mockedPosts));
//     component.ngOnInit();

//     expect(component.posts.length).toEqual(5);
//     expect(component.posts).toEqual(mockedPosts);
//   }));

//   // redirect to edit post will be tested w/ e2e

//   // it('should delete a post successfully', fakeAsync(() => {
//   //   const id = 'XXXXX';
//   //   const spy = spyOn(service, 'delete').and.returnValue(of(true));

//   //   component.deletePost(id);
//   //   expect(spy).toHaveBeenCalledWith(id);
//   // }));
// });
