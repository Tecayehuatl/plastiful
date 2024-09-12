import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [LogoComponent, RouterModule, CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  currentYear = new Date().getFullYear();
  isMenuShown = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.isMenuShown = !this.isMenuShown;
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
    this.isMenuShown = false;
  }
}
