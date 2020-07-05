import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {

  constructor() { }
  public countOfAllStars = 500;
  public listOfAllStars: any[]=[];
  private listOfAdjective = [
    'Meme Buff.',
    'Python Charmer.',
    'Data Enthusiast.',
    'Algorithm Lover.',
    'Software Engineer.',
    'Web Developer.'];
  public finalString = '';
  ngOnInit() {
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
    }, 100);
    for (let j = 0; j < this.countOfAllStars; j++) {
      const star: modal = new modal();
      star.size = Math.random() * 2;
      star.xCoordinate = Math.random() * window.innerWidth;
      star.yCoordinate = Math.random() * window.innerHeight;
      this.listOfAllStars.push(star);
    }



  }
}

export class modal {
  public xCoordinate: number;
  public yCoordinate: number;
  public size: number;
  constructor() {

  }
}
