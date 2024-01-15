import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  bannerText: string = "Get to know all the features and specs of a product you are looking to purchase to help you make decisive decision and avoid dissapointments later on!..";
}
