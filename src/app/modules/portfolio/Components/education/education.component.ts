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
    belowImageText: 'Bachelor of Technology',
    overlayTextArray: ['Vellore Institute of Technology, Vellore', 'Branch: Computer Science', '2015-2019'],
    imageUrl: './../../../assets/Graduation_ktn0.svg',
  }, {
    belowImageText: 'Senior Secondary School',
    overlayTextArray: ['Delhi Public School, Indore (C.B.S.E)', 'Engineering Science', '2012-2014'],
    imageUrl: './../../../assets/professor_8lrt.svg',
  }, {
    belowImageText: 'High School',
    overlayTextArray: ['Delhi Public School, Indore (C.B.S.E)','2010-2012'],
    imageUrl: './../../../assets/teaching_f1cm.svg',
  }];
  ngOnInit() {
  }

}
