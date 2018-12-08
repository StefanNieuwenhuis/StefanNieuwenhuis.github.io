import {Component} from '@angular/core';

interface MenuItem {
  title: string;
  href: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems: MenuItem[] = [
    {title: 'Blog', href: '/posts'},
    {title: 'About', href: '/about'}
  ];

  public title = 'Stefan Nieuwenhuis';
  public subtitle = 'Speaker, Frontend Developer, Sporter & Dreamer';
  collapseMenu = false;
}
