import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
    

    date = new Date();
    currentYear: string = '';

    ngOnInit(): void {
      this.currentYear += this.date.getFullYear();
    }
}
