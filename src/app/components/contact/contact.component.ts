import { Component, OnInit } from '@angular/core';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
  }
  // public downloadResume=()=>{
  //   this.download.downloadPdf('./../../../assets/finalresume.pdf').subscribe(res => {
  //     const fileURL = URL.createObjectURL(res);
  //     window.open(fileURL, '_blank');
  //   });

  // }
  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faInsta = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faHeart = faHeart;
  ngOnInit() {

  }

}
