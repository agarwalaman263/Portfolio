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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.'
      ],
      Link: 'Private'
    },
    {
      Name: 'Career Matrix',
      Description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.'
      ],
      Link: 'Private'
    },
    {
      Name: 'VIT Feedback Portal',
      Description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.'
      ],
      Link: 'Private'
    },
    {
      Name: 'Stock Prediction',
      Description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam illum vero autem at aperiam ab aliquam quibusdam iusto iste rerum, dolore unde nisi odio magni obcaecati ea, id temporibus.'
      ],
      Link: 'Private'
    }
  ];
  ngOnInit() {
  }

}
