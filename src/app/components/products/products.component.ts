import { Component, inject } from '@angular/core';
import { Product } from '../../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productService: ProductService = inject(ProductService);

  products: Product[] = this.productService.products;
  

}
