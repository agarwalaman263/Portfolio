import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() {
  }
  public stateOfExpands: boolean[] = [];
  public experience: any[] = [
    {
      overlayText: 'Studio Watr',
      cardHeader: 'Freelancer',
      belowHeader: 'May 2019 - July 2019',
      cardDetails:
        `As a freelancer, I was asked to create the company website using core CSS and angular.
         The Website uses CSS styling and optimization at its peak level.
         The website was curated by awwwwwards.com and as a average rating of 8.`
    },
    {
      overlayText: 'Philips India',
      cardHeader: 'Full Stack Developer',
      belowHeader: 'July 2019 - Today',
      cardDetails:
        `During my service, I was asked to work on Angular 7 and Spring Boot Application.
        Along with Front End and API development,
        I also worked on deployment using docker and architectural tools like RabbitMQ.
        I gained knowledge on how to cover all the edge cases in a
        micro service architecture when scaling the application to a larger audience.`
    },
    {
      overlayText: 'Philips India',
      cardHeader: 'Intern',
      belowHeader: 'Jan 2019 - July 2019',

      cardDetails:
        `As an Intern,
        I was introduced to Java and Angular.
        I was subjected to various proof of concepts (POCs) to get an indepth view of Spring Boot and front end development.
        Along side Java and Angular, I also gained command over bash terminal, Git and Artifactory.`

    },
    {
      overlayText: 'Kuehne Nagel',
      cardHeader: 'Intern',
      belowHeader: 'May 2018 - July 2019',
      cardDetails:
        `I worked on an application for the HR Team which would provide the employees, a way to track all the minimum requirements for getting to the desired rank in the office hierarchy.
        The backend was developed in Python using a framework called Flask while the front end was developed using Vanilla JS.
        The deployment platform was Heroku while the database used was PostgreSQL and Amazon S3 buckets.
        `
    },
    {
      overlayText: 'IEEE SPS VIT',
      cardHeader: 'Board Member',
      belowHeader: 'April 2018 - April 2019',
      cardDetails:
        `IEEE Signal Processing Society is one of the most successful chapters in VIT.
        As a Board member, I led a team of Web developers and Designer to collaborate and develop various web based projects.
        The team conducted various workshops and hand on dev events to facilitate the students.
        I also got opportunity to be the speaker for a number of workshops on Web Development and Adobe Photoshop.
        `
    },
    {
      overlayText: 'Gravitas 2016',
      cardHeader: 'Core Designer',
      belowHeader: 'May 2016 - Aug 2016',
      cardDetails:
        `Gravitas is one of the largest Tech fest in India.
        I was a part of the core design team, which worked on Social Media publicity and
        I was given the task to design online posters using softwares like Adobe Photoshop,
        Adobe Illustrator etc which should stick to the theme of the event.
        The posters mainly focuses on advertising the events and workshops happening in the Tech Fest.
        `
    }
  ];
  ngOnInit() {
    this.stateOfExpands = new Array(this.experience.length).fill(false);
  }

  public expandContactWork(elementNumber: number) {
    const mem = this.stateOfExpands[elementNumber];
    for (let i = 0; i < this.experience.length; i++) {
      this.stateOfExpands[i] = false;
    }
    this.stateOfExpands[elementNumber] = !mem;
  }

}
