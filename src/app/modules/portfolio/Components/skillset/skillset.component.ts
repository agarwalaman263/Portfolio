import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
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
    }, {
      skill: 'NodeJS',
      path: 'nodejs.svg'
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
      skill: 'PostgreSQL',
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
    },
    {
      skill: 'Docker',
      path: 'docker.svg'
    }, {
      skill: 'Kubernates',
      path: 'kubernetes.svg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
