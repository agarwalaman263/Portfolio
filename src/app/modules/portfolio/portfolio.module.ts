import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { PortfolioHomeComponent } from './Components/portfolio-home/portfolio-home.component';
import { TypewriterComponent } from './Components/typewriter/typewriter.component';
import { EducationComponent } from './Components/education/education.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { SkillsetComponent } from './Components/skillset/skillset.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NgCardioModule } from 'ng-cardio';
import { InlineSVGModule } from 'ng-inline-svg';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PortfolioHomeComponent,
    TypewriterComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsetComponent,
    ContactComponent,
],
  imports: [
    CommonModule,
    CoreModule,
    NgCardioModule,
    FontAwesomeModule,
    PortfolioRoutingModule,
    InlineSVGModule

  ], exports:[PortfolioHomeComponent]
})
export class PortfolioModule { }
