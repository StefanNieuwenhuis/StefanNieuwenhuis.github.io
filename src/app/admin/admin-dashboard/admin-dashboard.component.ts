import { PostsService } from '../../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public posts: Post[];
  public selectedPost: Post;
  public currentIndex: number;
  public showDialog: boolean;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  public confirmDeletion(idx: string) {
    this.showDialog = true;
    this.selectedPost = this.posts[idx];
  }

  public onCancelConfirmDeletionDialog() {
    this.showDialog = false;
    this.currentIndex = null;
    this.selectedPost = null;
  }

  public deletePost(id: string) {
    this.showDialog = false;
    this.onCancelConfirmDeletionDialog();
    this.postsService
      .delete(id)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  public setCurrentIndex(idx) {
    this.currentIndex = idx;
  }

}
