// import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
// import { of } from 'rxjs';

// import { NewPostComponent } from './new-post.component';
// import { PostsService } from './../../shared/services/posts.service';

// describe('NewPostComponent', () => {
//   let component: NewPostComponent;
//   let fixture: ComponentFixture<NewPostComponent>;
//   let service: PostsService;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [NewPostComponent],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(NewPostComponent);
//     component = fixture.componentInstance;
//     service = TestBed.get(PostsService);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should successfully save the post', fakeAsync(() => {
//     const spy = spyOn(service, 'create').and.returnValue(of(null));

//     component.save();
//     tick();
//     expect(spy).toHaveBeenCalled();
//     expect(component.isSaved).toBeTruthy();
//   }));
// });
