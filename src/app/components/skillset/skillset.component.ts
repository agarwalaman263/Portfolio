import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  public strips = [
    {
      skill: 'C++',
      path: 'C++.svg'
    },
    {
      skill: 'Python',
      path: 'python-5.svg'
    },
    {
      skill: 'Java',
      path: 'java.svg'
    },
    {
      skill: 'HTML',
      path: 'html.svg'
    },
    {
      skill: 'CSS',
      path: 'CSS.svg'
    },
    {
      skill: 'Vanilla JS',
      path: 'javascript.svg'
    },
    {
      skill: 'SASS',
      path: 'sass.svg'
    },
    // {
    //   skill: 'Gulp',
    //   path: 'gulp.svg'
    // },
    {
      skill: 'Bootstrap',
      path: 'bootstrap.svg'
    },
    {
      skill: 'Angular',
      path: 'angular.svg'
    },{
      skill:'NodeJS',
      path:'nodejs.svg'
    },
    {
      skill: 'Webpack',
      path: 'webpack.svg'
    },
    {
      skill: 'Spring Boot',
      path: 'springboot.svg'
    },
    {
      skill: 'Flask',
      path: 'flask.svg'
    },
    {
      skill: 'TypeScript',
      path: 'typescript.svg'
    },
    {
      skill: 'PostgresSQL',
      path: 'postgresql.svg'
    },
    {
      skill: 'MongoDB',
      path: 'mongodb.svg'
    },
    {
      skill: 'Git',
      path: 'git.svg'
    },
    {
      skill: 'Postman',
      path: 'postman.svg'
    }
  ];
  public skills =
    [{
      Domain: 'Competitive Coding',
      set: [
        {
          skill: 'C++',
          level: 0.60
        }, {
          skill: 'Python',
          level: 0.85
        },
        {
          skill: 'Java',
          level: 0.75
        }
      ]
    },
    {
      Domain: 'Front-End Web Development',
      set: [
        {
          skill: 'HTML',
          level: 0.80
        },
        {
          skill: 'CSS',
          level: 0.85
        }, {
          skill: 'JS',
          level: 0.80
        }
      ]
    },
    {
      Domain: 'Web Framework',
      set: [
        {
          skill: 'Vanilla',
          level: 0.90
        },
        {
          skill: 'Angular',
          level: 0.85
        }
      ]
    }, {
      Domain: 'Backend Frameworks',
      set: [
        {
          skill: 'Flask',
          level: 0.75
        },
        {
          skill: 'Spring',
          level: 0.75
        }
      ]
    },
    {
      Domain: 'Databases',
      set: [
        {
          skill: 'Postgres',
          level: 0.80
        },
        {
          skill: 'MongoDB',
          level: 0.70
        }
      ]
    },
    {
      Domain: 'Version Control',
      set: [
        {
          skill: 'Git',
          level: 0.90
        }
      ]
    },
    ];
  constructor() { }

  ngOnInit() {
  }

}
