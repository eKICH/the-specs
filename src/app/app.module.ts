import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonyComponent } from './components/home/testimony/testimony.component';
import { SubFooterComponent } from './components/sub-footer/sub-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    CategoriesComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailsComponent,
    FooterComponent,
    TestimonyComponent,
    SubFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
