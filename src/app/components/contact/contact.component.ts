import { Component, OnInit } from '@angular/core';
import {library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab, faFontAwesome, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { DownloadPDFService } from 'src/app/services/download-pdf.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private download: DownloadPDFService) {
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
