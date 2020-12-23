import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {

  private isBrowser = true;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
   }

   public countOfAllStars = 200;
  public listOfAllStars: any[] = [];
  private listOfAdjective = [
    'Python Charmer.',
    'Data Enthusiast.',
    'Algorithm Lover.',
    'Software Engineer.',
    'Web Developer.'];
  public finalString = '';
  ngOnInit() {
    if (this.isBrowser) {
      let i = 0;
      let j = 0;
      let increasingState = true;
      setInterval(() => {
        i = i % this.listOfAdjective.length;
        this.finalString = this.listOfAdjective[i].slice(0, j);
        if (j !== this.listOfAdjective[i].length && increasingState === true) {
          j++;
        } else if (j === 0 && increasingState === false) {
          increasingState = true;
          i = i + 1;
        } else if (j !== this.listOfAdjective[i].length && increasingState === false) {
          j--;
        } else {
          increasingState = false;
          j--;
        }
      }, 400);
      for (let k = 0; k < this.countOfAllStars; k++) {
        const star: Modal = new Modal();
        star.size = Math.random() * 2;
        star.xCoordinate = Math.random() * window.innerWidth;
        star.yCoordinate = Math.random() * window.innerHeight;
        this.listOfAllStars.push(star);
      }
    }
  }
}

export class Modal {
  public xCoordinate: number;
  public yCoordinate: number;
  public size: number;
  constructor() {

  }
}
