import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public POSTS_PER_PAGE = 5;

  public posts: Post[];
  public slicedPosts: Post[];

  // Pagination variables
  public currentPage = 1;
  public totalNumberOfPages: number;
  public pages = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  public setPage(page: number) {
    if (page < 1 || page > this.totalNumberOfPages) {
      page = 1;
    }
    this.currentPage = page;
    localStorage.setItem('currentPage', page.toString());
    this.slicePostsIntoPages();
  }

  private getAllPosts() {
    this.postsService.getAllPosts().subscribe((posts: Post[]) => {
      const sortBy = (key) => {
        return (a, b) => (a[key] > b[key]) ? ((b[key] > a[key]) ? 0 : -1) : 1;
      };
      this.posts = posts;
      posts.sort(sortBy('publishDate'));
      this.calculateNumberOfPages();
      this.slicePostsIntoPages();
    }, err => console.error('dang!'));
  }

  private calculateNumberOfPages() {
    this.totalNumberOfPages = Math.ceil(this.posts.length / this.POSTS_PER_PAGE);
    this.setPage(parseInt(localStorage.getItem('currentPage'), 10) || 1);
    this.pages = Array.from({ length: this.totalNumberOfPages }, (_, i) => i + 1);
  }

  private slicePostsIntoPages() {
    const start = ((this.currentPage - 1) * this.POSTS_PER_PAGE);
    const end = start + this.POSTS_PER_PAGE;
    this.slicedPosts = this.posts.slice(start, end);
  }

}
