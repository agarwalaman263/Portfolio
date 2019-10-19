import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }
  public experience = [
    {
      company: 'Philips',
      designation: 'Full Stack Developer',
      duration: 'July 2019 - Today',
      work:
        `During my service, I was asked to work on Angular 7 and Spring Boot Application.
        Along with Front End and API development,
        I also worked on deployment using docker and architectural tools like RabbitMQ.
        I gained knowledge on how to cover all the edge cases in a
        micro service architecure when scaling the application to a larger audience.`
    },
    {
      company: 'Philips India',
      designation: 'Intern',
      duration: 'Jan 2019 - July 2019',

      work:
        `As an Intern, I was introduced to Java and Angular. I was subjected to various proof of concepts (POCs) to get an indepth view of Spring Boot and front end development. Along side Java and Angular, I also gained command over bash terminal, Git and Artifactory.`

    },
    {
      company: 'Kuehne Nagel',
      designation: 'Intern',
      duration: 'May 2018 - July 2019',
      work:
        `As an Intern, I was expected to make a application for the HR Team which could gamify the career of employees. This provides the employee to track the minimum requirements for getiing the desired rank in the office heirarchy. The backend was developed in Python using a framework called Flask while the front end was developed using Vanilla JS. The deployment platform was Heroku while the database used was PostgreSQL and Amazon S3 buckets.
        `
    },
     {
       company: 'IEEE SPS VIT',
      designation: 'Board Member',
      duration: 'April 2018 - April 2019',
      work:
        `IEEE Signal Processing Society is one of the most successful chapters in VIT. 
        As a Board member, I led a team of Web developers and Designer to collaborate and develop various web based projects. 
        The team conducted various workshops and hand on dev events to facilitate the students. 
        I also got opportunity to be the speaker for a number of workshops on Web Development and Adobe Photoshop.
        `
    },
     {
company: 'Gravitas 2016',
      designation: 'Core Designer',
      duration: 'May 2016 - Aug 2016', 
      work:
        `Gravitas is one of the largest College Tech fest in India. 
        I was a part of the organizing committee for the year 2016. 
        I was a part of the Design Group which emphasized on Social Media publicity and Design Campaigns. 
        Being a part of Design group, 
        I was given the task to Online posters using softwares like Adobe Photoshop, 
        Adobe Illustrator etc which should stick to the theme of the event. 
        The posters mainly focuses on advertising the events and workshops happening in the Tech Fest.
        `
    },
{
  company: 'Apple Developers Group VIT',
      designation: 'Core Designer',
      duration: 'Oct 2015 - April 2017',
      work:
        `Apple Developers Group is one of the most well known clubs functioning in VIT. 
        The club is officially affiliated to Apple Inc. under its Student Program. 
        I joined the club as a designer and worked on poster design along with UI/UX interfacing. 
        During that time, I gain knowledge on how to work Adobe Photoshop, Adobe Illustrator etc.`
    }
];
  ngOnInit() {
  }

}
