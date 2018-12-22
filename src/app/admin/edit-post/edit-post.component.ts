import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Post } from './../../shared/models/post';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  public post: Post = {
    id: '',
    title: '',
    body: '',
    publishDate: null,
    author: {
      name: ''
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

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.loadPost(params['id']);
    });
  }

  public onSave() {
    this.postsService
      .update(this.post)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  private loadPost(id: string): any {
    this.postsService.getPostById(id).subscribe(post => this.post = post);
  }
}
