import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {

  constructor() { }
  private listOfAdjective = ['Meme Buff.', 'Python Charmer.', 'Data Enthusiast.', 'Algorithm Lover.', 'Software Engineer.', 'Web Developer.'];
  public finalString = '';
  @HostListener('scroll', ['$event']) 
        scrollHandler(event) {
          console.debug(event);
        }
  ngOnInit() {
    let i = 0;
    let j = 0;
    let increasingState = true;
    setInterval(() => {
      i = i % this.listOfAdjective.length;
      this.finalString = this.listOfAdjective[i].slice(0, j);
      // console.log(this.finalString);
      if (j != this.listOfAdjective[i].length && increasingState == true) {
        j++;
      } else if (j == 0 && increasingState == false) {
        increasingState = true;
        i = i + 1;
      } else if (j != this.listOfAdjective[i].length && increasingState == false) {
        j--;
      } else {
        increasingState = false;
        j--;
      }
    }, 100);
  }


}
