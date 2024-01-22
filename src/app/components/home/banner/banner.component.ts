import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  route: Router = inject(Router);

  bannerText: string = "Get to know all the features and specs of a product you are looking to purchase to help you make decisive decision and avoid dissapointments later on!..";


  onSearchClicked(value: string){
    this.route.navigate(['/products'], {queryParams: {search: value}});
  }

}
