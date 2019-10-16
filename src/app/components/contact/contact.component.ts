import { Component, OnInit } from '@angular/core';
import {library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab, faFontAwesome, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faInsta = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faHeart = faHeart;
    ngOnInit() {

  }

}
