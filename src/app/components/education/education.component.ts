import { Component, OnInit } from '@angular/core';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }
  public education = [{
    catergory: 'High School',
    CGPA: 8.4,
    institution: 'Delhi Public School, Indore (C.B.S.E)',
    duration: '2010-2012',
    image: './../../../assets/teaching_f1cm.svg',
    overlay: '10th'
  }, {
    catergory: 'Senior Secondary School',
    percentage: 0.844,
    institution: 'Delhi Public School, Indore (C.B.S.E)',
    duration: '2012-2014',
    additional: ['Engineering Science'],
    image: './../../../assets/professor_8lrt.svg',
    overlay: '12th'
  }, {
    catergory: 'Bachelor of Technology',
    CGPA: 7.6,
    institution: 'Vellore Institute of Technology, Vellore',
    additional: ['Branch: Computer Science'],
    duration: '2015-2019',
    image: './../../../assets/Graduation_ktn0.svg',
    overlay: 'graduation'
  }];
  public faTimes = faTimes;
  public faBars = faBars;
  public expanded = false;
  public expandedState: boolean[] = [];
  public alter(elementNumber) {
    let mem = this.expandedState[elementNumber];
    for (let i = 0; i < this.expandedState.length; i++) {
      this.expandedState[i] = false;
    }
    this.expandedState[elementNumber] = !mem;
  }
  ngOnInit() {
    for (let i = 0; i < this.education.length; i++) {
      this.expandedState.push(false);
    }
  }

}
