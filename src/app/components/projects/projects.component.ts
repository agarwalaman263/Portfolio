import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  public projects = [
    {
      Name: 'VOS',
      Description: [
        `VIT Operating System is a electron based project which tries to emulate the MacOs user experience on a cross platform application. 
        The basic aim of the application was to facilitate the students to manage various aspects of their academics like marks, ranks, attendance, teachers contact info etc. 
        The backend is designed using Express js while the front end was created in Vanilla JS and MySQL was used as database. 
        CheerioJS was used as the web scraper and ElectronJS was used to make the application cross-platform compatible.`
      ],
      Link: 'Private'
    },
    {
      Name: 'Career Matrix',
      Description: [
        `Career Matrix is a tool made to facilitate the HR team to select the potential candidate for a position in a company. 
        It also helps the management of a company to increase the transparency from teh employee\'s perspective. 
        It helps the employees to gamify their career and goals. 
        Each designation have a specific threshold value and an employee can increase the points by completing the mandatory and optional prerequisites. 
        It also helps the employee have a better perspective of the requirement of a designation. 
        The backend was designed using Flask while the front end was developed using Vanilla JS. 
        Postgres and Amazon S3 was used as the databases while Heroku was used as databases.`
      ],
      Link: 'Private'
    },
    {
      Name: 'VIT Feedback Portal',
      Description: [
        `VIT Feedback Portal was developed to facilitate the teachers gather feedback from students regarding their teaching methodology. 
        The core concept was to maintain the anonymity of student and make sure that the feedback reaches the teacher. 
        The technology used was pHp and VanillaJs along with Jquery. 
        The website uses both Server side rendering as when as AJAX calling.`
        ],
      Link: 'Private'
    },
    {
      Name: 'Stock Prediction',
      Description: [
        `Stock prediction is a ML based project which helps the user to predict the future prices of a stock. the dataset for the ML modelling was sourced from Kaggle while the language preferred for development is python. The dataset was first cleaned and then mapped to various parameter which are supposed to affect the previous prices like GDP of country, Oil prices, inflation etc. 
        The project runs for 500 companies. For each company, the stock prices are stores for last 5 years. 3 algorithm are computed and bagged together for higher accuracy. The accuracy of this project has reached 92%.`
      ],
      Link: 'Private'
    }
  ];
  ngOnInit() {
  }

}
