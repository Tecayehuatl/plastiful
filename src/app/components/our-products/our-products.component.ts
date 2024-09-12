import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})
export class OurProductsComponent {
  gallery: GalleryItem[] = [
    {
      name: 'Sellos personalizados',
      url: '../../../assets/images/product-1.jpg',
    },
    {
      name: 'Sellos genéricos',
      url: '../../../assets/images/product-4.jpg',
    },
    {
      name: 'Filtros y refacciones',
      url: '../../../assets/images/product-1.jpg',
    },
    {
      name: 'Tapas',
      url: '../../../assets/images/product-5.jpg',
    },
  ];
}
