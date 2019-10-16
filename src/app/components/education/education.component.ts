import { Component, OnInit } from '@angular/core';

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
    duration: '2010-2012'
  }, {
    catergory: 'Senior Secondary School',
    percentage: 0.844,
    institution: 'Delhi Public School, Indore (C.B.S.E)',
    duration: '2012-2014',
    additional: ['Engineering Science']
  }, {
    catergory: 'Bachelor of Technology',
    CGPA: 7.6,
    institution: 'Vellore Institute of Technology, Vellore',
    additional: ['Branch: Computer Science'],
    duration: '2015-2019'
  }];
  ngOnInit() {
  }

}
