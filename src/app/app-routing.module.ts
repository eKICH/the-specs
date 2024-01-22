import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent, title: 'Products'},
  {path: 'products/product/:id', component: ProductDetailsComponent, title: 'Product Details'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
