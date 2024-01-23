import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.scss'
})
export class TestimonyComponent implements OnInit {
  
  testimony = [
    { id: 1, description: "This app is awesome. I always use it to check specs and features of  products that I am looking to buy which makes it easier for me to get the right product. I recommend this app for everyone who is looking to check specs and features of products before making the decision to buy their products", name: "James West", location: "Nairobi", country: "Kenya", img: 'assets/images/avatar.png' },
    { id: 2, description: "This app is awesome. I always use it to check specs and features of  products that I am looking to buy which makes it easier for me to get the right product. I recommend this app for everyone who is looking to check specs and features of products before making the decision to buy their products", name: "James West", location: "Nairobi", country: "Kenya", img: 'assets/images/avatar.png' },
    { id: 3, description: "This app is awesome. I always use it to check specs and features of  products that I am looking to buy which makes it easier for me to get the right product. I recommend this app for everyone who is looking to check specs and features of products before making the decision to buy their products", name: "James West", location: "Nairobi", country: "Kenya", img: 'assets/images/avatar.png' },
    { id: 4, description: "This app is awesome. I always use it to check specs and features of  products that I am looking to buy which makes it easier for me to get the right product. I recommend this app for everyone who is looking to check specs and features of products before making the decision to buy their products", name: "James West", location: "Nairobi", country: "Kenya", img: 'assets/images/avatar.png' },
    { id: 5, description: "This app is awesome. I always use it to check specs and features of  products that I am looking to buy which makes it easier for me to get the right product. I recommend this app for everyone who is looking to check specs and features of products before making the decision to buy their products", name: "James West", location: "Nairobi", country: "Kenya", img: 'assets/images/avatar.png' }
  ];


  ngOnInit(): void {
  }

}
