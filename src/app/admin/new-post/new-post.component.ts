import { Post } from '../../shared/models/post';
import { PostsService } from '../../shared/services/posts.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  public isSaved = false;

  public post: Post = {
    id: '',
    title: '',
    body: '',
    publishDate: new Date(),
    author: {
      name: 'Stefan Nieuwenhuis'
    }
  };

  public editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [ // optional
      {
        name: "responsive image",
        class: "img-fluid",
        tag: 'img'
      },
      {
        name: 'excerpt',
        class: 'excerpt',
        tag: 'span'
      }
    ]
  };
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.post.id = this.postsService.generateId();
  }

  public onSave() {
    this.postsService
      .create(this.post)
      .then(response => console.log(response));
  }

}
