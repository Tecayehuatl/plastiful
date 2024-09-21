import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  ProductsService,
  sectionItem,
} from '../../shared/services/products.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  public product$?: Observable<sectionItem | undefined>;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId) {
        this.product$ = this.getProductById(Number(userId));
      }
    });
  }

  getProductById(id: number): Observable<sectionItem | undefined > {
    return this.productsService.galleryItems$
      .pipe(
        filter((product) => !!product),
        map((product) => product.find((item) => item.id === id))
      )
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
