import { Component, OnInit } from '@angular/core';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faInsta = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faHeart = faHeart;

  constructor() {
  }

  ngOnInit() {

  }

}
