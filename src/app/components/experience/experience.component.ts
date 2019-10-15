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
        `During my service, I was asked to work on Angular 7 and Spring Boot Application. Along with Front End and API development, I also worked on deployment using docker and architectural tools like RabbitMQ. I gained knowledge on how to cover all the edge cases in a micro service architeture when scaling the application to a larger audience.`

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
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
      alias dignissimos. Modi nobis possimus reiciendis eligendi vero
      ratione laborum nam laudantium. Vitae beatae perferendis ipsa
      ducimus consectetur fugiat debitis veniam! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Minus, voluptas. Adipisci
      voluptatibus illo aperiam voluptas obcaecati at soluta, ut facere
      mollitia velit eveniet nostrum, perferendis quod vero asperiores
      doloribus deserunt.`

    },
     {
company: 'Gravitas 2016',
      designation: 'Core Designer',
      duration: 'May 2016 - Aug 2016',
      work:
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
      alias dignissimos. Modi nobis possimus reiciendis eligendi vero
      ratione laborum nam laudantium. Vitae beatae perferendis ipsa
      ducimus consectetur fugiat debitis veniam! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Minus, voluptas. Adipisci
      voluptatibus illo aperiam voluptas obcaecati at soluta, ut facere
      mollitia velit eveniet nostrum, perferendis quod vero asperiores
      doloribus deserunt.`

    },
{
  company: 'Apple Developers Group VIT',
      designation: 'Core Designer',
      duration: 'Oct 2015 - April 2017',
      work:
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
      alias dignissimos. Modi nobis possimus reiciendis eligendi vero
      ratione laborum nam laudantium. Vitae beatae perferendis ipsa
      ducimus consectetur fugiat debitis veniam! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Minus, voluptas. Adipisci
      voluptatibus illo aperiam voluptas obcaecati at soluta, ut facere
      mollitia velit eveniet nostrum, perferendis quod vero asperiores
      doloribus deserunt.`

    }
];
  ngOnInit() {
  }

}
