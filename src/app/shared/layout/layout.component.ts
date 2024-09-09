import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  currentYear = new Date().getFullYear();
}
