import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public projects = [
    {
      belowImageText: 'VOS',
      overlayText:
        `<b>VIT Operating System</b> is a electron based project which tries to emulate the MacOs user experience on a cross platform application.
        The basic aim of the application was to facilitate the students to manage various aspects of their academics like marks, ranks, attendance, teachers contact info etc.
        The backend is designed using <b>Express js</b> along with <b>Cheerio</b> for scrapping and <b>ElectronJS</b> cross platform compatibility, while the front end was created in Vanilla JS and MySQL was used as database.`
      ,
      imageUrl: './../../../assets/operating_system_4lr6.svg'
    },
    {
      belowImageText: 'Career Matrix',
      overlayText:
        `Career Matrix is a tool made to facilitate the HR team to select the potential candidate for a position in a company.
        Each designation have a specific threshold value and an employee can increase the points by completing the mandatory and optional prerequisites.
        It also helps the employee have a better perspective of the requirement of a designation.
        The backend was designed using <b>Flask</b> while the front end was developed using <b>Vanilla JS</b>.
        <b>Postgres</b> and <b>Amazon S3</b> was used as the databases while <b>Heroku</b> was used as databases.`
      ,
      imageUrl: './../../../assets/success_factors_fay0.svg'
    },
    {
      belowImageText: 'VIT Feedback Portal',
      overlayText:
        `VIT Feedback Portal was developed to facilitate the teachers gather feedback from students regarding their teaching methodology.
        The core concept was to maintain the anonymity of student and make sure that the feedback reaches the teacher.
        The technology used was <b>pHp</b> and <b>VanillaJs</b> along with <b>Jquery</b>.
        The website uses both <b>Server side rendering</b> as when as <b>AJAX calling</b>.`
      ,
      imageUrl: './../../../assets/accept_tasks_po1c.svg'
    }
  ];

}
