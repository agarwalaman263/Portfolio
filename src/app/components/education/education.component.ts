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
    catergory: 'Bachelor of Technology',
    CGPA: 7.6,
    institution: 'Vellore Institute of Technology, Vellore',
    additional: ['Branch: Computer Science'],
    duration: '2015-2019',
    image: './../../../assets/Graduation_ktn0.svg',
  }, {
    catergory: 'Senior Secondary School',
    institution: 'Delhi Public School, Indore (C.B.S.E)',
    duration: '2012-2014',
    additional: ['Engineering Science'],
    image: './../../../assets/professor_8lrt.svg',
  }, {
    catergory: 'High School',
    institution: 'Delhi Public School, Indore (C.B.S.E)',
    duration: '2010-2012',
    image: './../../../assets/teaching_f1cm.svg',
    overlay: '10th'
  }];
  ngOnInit() {
  }

}
