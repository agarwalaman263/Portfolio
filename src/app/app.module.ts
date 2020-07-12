import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';
import { EducationComponent } from './components/education/education.component';
import { CoreModule } from './modules/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InlineSVGModule } from 'ng-inline-svg';

import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsetComponent } from './components/skillset/skillset.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCardioModule } from 'ng-cardio';
@NgModule({
  declarations: [
    AppComponent,
    TypewriterComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsetComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    HttpClientModule,
    InlineSVGModule,
    NgCardioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
