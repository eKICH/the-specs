import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../models/product.interface';
import { ProductService } from '../../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit, OnDestroy{

  productService: ProductService = inject(ProductService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  productId!: number;
  selectedProduct!: Product | undefined;
  prodObs!: any;

  ngOnInit(){
    // this.productId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.prodObs = this.activeRoute.paramMap.subscribe((id) => {
      this.productId = Number(id.get('id'));
      this.selectedProduct = this.productService.products.find((prod) => prod.id === this.productId);
    });
  }

  ngOnDestroy() {
    this.prodObs.unsubscribe();
  }
}
