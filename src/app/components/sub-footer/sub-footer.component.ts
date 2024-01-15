import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrl: './sub-footer.component.scss'
})
export class SubFooterComponent {

  facebook = faFacebook;
  x = faXTwitter;
  insta = faInstagram;
  linkedin = faLinkedin;

  context: string = "the Specs helps shoppers to first check and compare product features and specs to be able to make better decisions and purchase products they understand and love."
}
