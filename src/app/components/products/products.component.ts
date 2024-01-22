import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  
  products: Product[] = [];
  searchString!: any;
  
  ngOnInit() {
      this.activeRoute.queryParamMap.subscribe((route) => {
        this.searchString = route.get('search');

        if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
          this.products = this.productService.products;
        } else {
         this.products = this.productService.products.filter(p => p.category.toLowerCase()
          .includes(this.searchString.toLowerCase()) || p.brand.toLowerCase()
          .includes(this.searchString.toLowerCase()) || p.model.toLowerCase()
          .includes(this.searchString.toLowerCase()));
        }
      });
  }

}
