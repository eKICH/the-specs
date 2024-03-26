import { Component, Input, inject } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {

  router: Router = inject(Router);

  showLoader: boolean = false;

  ngOnInit(){
      this.router.events.subscribe((routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.showLoader = true;
        }
      setTimeout(() => {
        if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
          this.showLoader = false;
        }
      }, 5000);
    });
  }
}
