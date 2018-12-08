import {Component, OnInit} from '@angular/core';
import {Post} from '../shared/models/post';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../shared/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: Post;

  constructor(private route: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit() {
    this.getPost();
  }

  private getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postsService.getPostById(id).subscribe((post: Post) => this.post = post);
  }
}
