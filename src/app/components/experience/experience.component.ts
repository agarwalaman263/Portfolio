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
      Designation: 'Full Stack Developer',
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
      company: 'Philips India',
      Designation: 'Intern',
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
      company: 'Kuehne Nagel',
      Designation: 'Intern',
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
       company: 'IEEE SPS VIT',
      Designation: 'Board Member',
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
      Designation: 'Core Designer',
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
      Designation: 'Core Designer',
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
