import { Component } from '@angular/core';


@Component({
  selector: 'product-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  //TODO: refactor the below JS code to TS code

  toggleIcon() {
    const menu: HTMLElement | null = document.getElementById('menu');
    menu?.classList.toggle('la-times');
  }

  linkClicked() {
    const checked: HTMLElement | null = document.getElementById('check');
    const menu: HTMLElement | null = document.getElementById('menu');

    checked?.click();
    menu?.classList.toggle('la-times');
  }
}
