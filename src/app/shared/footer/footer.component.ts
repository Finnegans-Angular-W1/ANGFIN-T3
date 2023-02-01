import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from './nav-links/nav-links.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  navLinks: Link[] = [
    { label: 'Ig', path: '/home', icon: 'fab fa-instagram' },
    { label: 'About', path: '/about', icon: 'fas fa-info-circle' },
    { label: 'social', path: '/contact', icon: 'fab fa-facebook-f' }
  ];
  
  @Input() logoUrl: string ='https://i.ytimg.com/vi/bkqI_RKS8aU/hqdefault.jpg';

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }
  
}
