import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  route: Router = inject(Router);

  categories = [
    {imgUrl: 'assets/images/Tvs.png', title: "Television"},
    {imgUrl: '../../../../assets/images/desktop.png', title: "Desktop"},
    {imgUrl: '../../../../assets/images/laptop.png', title: "Laptop"},
    {imgUrl: '../../../../assets/images/phones&tablets.png', title: "Phones"}
  ];

  onCategoryClick(value: string){
    this.route.navigate(['/products'], {queryParams: {search: value}})
  }

}
