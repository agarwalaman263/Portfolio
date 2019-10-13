import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  public skills =
    [{
      Domain: 'Competitive Coding',
      set: [
        {
          skill: "C++",
          level: 60
        },
        {
          skill: "C",
          level: 50
        }, {
          skill: "Python",
          level: 70
        },
        {
          skill: "Java",
          level:60
        }
      ]
    },
    {
      Domain: 'Front-End Web Development',
      set: [
        {
          skill: "HTML",
          level: 80
        },
        {
          skill: "CSS",
          level: 85
        }, {
          skill: "JS",
          level: 80
        },
        {
          skill: 'SASS',
          level: 70
        }
      ]
    },
    {
      Domain: 'Web Framework',
      set: [
        {
          skill: "Vanilla",
          level: 50
        },
        {
          skill: "Angular",
          level: 85
        }, {
          skill: "React",
          level: 55
        }
      ]
    }, {
      Domain: 'Backend Frameworks',
      set: [
        {
          skill: "Flask",
          level: 75
        },
        {
          skill: "Express",
          level: 65
        }, {
          skill: "Spring",
          level: 60
        }
      ]
    },
    {
      Domain: 'Databases',
      set: [
        {
          skill: "Postgres",
          level: 80
        },
        {
          skill: "MongoDB",
          level: 70
        }
      ]
    },
    {
      Domain: 'Version Control',
      set: [
        {
          skill: "Git",
          level: 90
        }
      ]
    },
    ];
  constructor() { }

  ngOnInit() {
  }

}
