import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  categories = [
    {imgUrl: '../../../../assets/images/Tvs.png', title: "Television"},
    {imgUrl: '../../../../assets/images/desktop.png', title: "Desktop"},
    {imgUrl: '../../../../assets/images/laptop.png', title: "Laptop"},
    {imgUrl: '../../../../assets/images/phones&tablets.png', title: "Mobile / Tablet"}
  ];

}
