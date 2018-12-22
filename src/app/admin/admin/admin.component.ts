import { AuthService } from '../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public menuItems = [
    { label: 'Dashboard', routerLink: '/admin', title: 'Go to the dashboard' },
    { label: 'New Post', routerLink: '/admin/new-post', title: 'Create a new post' }
  ];
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/logout']);
  }

}
