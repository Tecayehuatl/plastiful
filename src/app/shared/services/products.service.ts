import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface sectionItem {
  id: number;
  name: string;
  imageUrl: string;
  data: GalleryItem[];
}

interface GalleryItem {
  name: string;
  url: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private galleryData: sectionItem[] = [
    {
      id: 1,
      name: 'Sellos personalizados',
      imageUrl: '../../../assets/images/sellos-personalizados/sello-personalizado-1.png',
      data: [
        { name: 'Sello 1', url: '../../../assets/images/sellos-personalizados/sello-personalizado-1.png', type: '' },
        { name: 'Sello 2', url: '../../../assets/images/sellos-personalizados/sello-personalizado-2.jpeg', type: '' },
        { name: 'Sello 3', url: '../../../assets/images/sellos-personalizados/sello-personalizado-3.jpeg', type: '' },
        { name: 'Sello 3', url: '../../../assets/images/sellos-personalizados/sello-personalizado-4.jpeg', type: '' },
        { name: 'Sello 3', url: 'https://www.youtube.com/embed/i7nYPArWFus', type: 'video' },
        { name: 'Sello 3', url: 'https://www.youtube.com/embed/Lzco2O7mz5k', type: 'video' },
        { name: 'Sello 3', url: 'https://www.youtube.com/embed/Jl0CfNtGY_c', type: 'video' },
      ],
    },
    {
      id: 2,
      name: 'Sellos de garantía',
      imageUrl: '../../../assets/images/sellos-genericos/sellos-genericos-2.jpg',
      data: [
        { name: 'Sello 1', url: '../../../assets/images/sellos-genericos/sellos-genericos-1.jpg', type: '' },
        { name: 'Sello 2', url: '../../../assets/images/sellos-genericos/sellos-genericos-2.jpg', type: '' },
        { name: 'Sello 3', url: '../../../assets/images/sellos-genericos/sellos-genericos-3.jpg', type: '' },
        { name: 'Sello 3', url: '../../../assets/images/sellos-genericos/sellos-genericos-4.jpeg', type: '' },
        { name: 'Sello 3', url: 'https://www.youtube.com/embed/du_OTpia4Rw', type: 'video' },
        { name: 'Sello 3', url: 'https://www.youtube.com/embed/f95evHNZQ2c', type: 'video' },
      ],
    },
    {
      id: 3,
      name: 'Filtros y refacciones',
      imageUrl: '../../../assets/images/product-1.jpg',
      data: [
        { name: 'Sello 1', url: '../../../assets/images/refacciones-y-filtros/refaccion-1.png', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/refacciones-y-filtros/refaccion-2.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/refacciones-y-filtros/refaccion-3.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/refacciones-y-filtros/refaccion-4.jpg', type: '' },
        // { name: 'Sello 1', url: '../../../assets/images/refacciones-y-filtros/refaccion-5.jpg', type: '' },
      ],
    },
    {
      id: 4,
      name: 'Tapas',
      imageUrl: '../../../assets/images/tapas/tapa-5.jpg',
      data: [
        { name: 'Sello 1', url: '../../../assets/images/tapas/tapa-6.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/tapas/tapa-7.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/tapas/tapa-5.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/tapas/tapa-4.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/tapas/tapa-8.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/tapas/tapa-9.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/tapas/tapa-10.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/tapas/tapa-1.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/tapas/tapa-2.jpg', type: '' },
        { name: 'Sello 1', url: '../../../assets/images/tapas/tapa-3.jpg', type: '' },
      ],
    },
  ];
  private _galerryItems = new BehaviorSubject<sectionItem[]>(this.galleryData);
  public galleryItems$ = this._galerryItems.asObservable();

  constructor() { }

}
