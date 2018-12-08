import {Component, OnInit} from '@angular/core';
import {markdown} from 'markdown';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.scss']
})
export class ManagePostsComponent implements OnInit {
  public post = {
    title: '',
    author: {
      name: 'Stefan'
    },
    publishDate: new Date().getTime(),
    image: {
      src: '',
      alt: ''
    },
    body:
      'Tell your story...'
  };
  public showPreview = false;

  constructor() {
  }

  ngOnInit() {
  }

  convertToHtml(input: string): string {
    return markdown.toHTML(input);
  }

  togglePreview() {
    this.showPreview = !this.showPreview;
    console.log('showpreview', this.showPreview);
  }

}
