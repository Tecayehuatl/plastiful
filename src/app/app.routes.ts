import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "gallery",
    component: OurProductsComponent,
  },
  { path: "gallery/:id", component: ProductsComponent },
];
