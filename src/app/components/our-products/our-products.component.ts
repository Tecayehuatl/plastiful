import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})
export class OurProductsComponent {

  gallery$ = this.productsService.galleryItems$;

  constructor(
    private router: Router,
    public productsService: ProductsService
  ) {}

  navigateTo(id: number): void {
    this.router.navigate(['/gallery', id]);
  }
}
