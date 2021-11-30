import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingGeneralComponent } from './coding/coding-general/coding-general.component';
import { CodingResourcesComponent } from './coding/coding-resources/coding-resources.component';
import { CppNotesPart2Component } from './coding/cpp-notes-part2/cpp-notes-part2.component';
import { CppNotesComponent } from './coding/cpp-notes/cpp-notes.component';
import { DataStructuresComponent } from './coding/data-structures/data-structures.component';
import { JavascriptNotesComponent } from './coding/javascript-notes/javascript-notes.component';
import { NpmNotesComponent } from './miscellaneous/npm-notes/npm-notes.component';
import { TechnicalNotesComponent } from './technical-notes.component';
import { PostgresqlNotesComponent } from './webDevelopment/postgresql-notes/postgresql-notes.component';
import { SequelizeNotesComponent } from './webDevelopment/sequelize-notes/sequelize-notes.component';
import { WebDevelopmentGeneralComponent } from './webDevelopment/web-development-general/web-development-general.component';
import { GitlabCiCdNotesComponent } from './miscellaneous/gitlab-ci-cd-notes/gitlab-ci-cd-notes.component';
import { GitNotesComponent } from './miscellaneous/git-notes/git-notes.component';
import { RosNotesComponent } from './robotics/ros-notes/ros-notes.component';

const routes: Routes = [{
  path:'',
  component:TechnicalNotesComponent,
  children: [
    {
      path: 'coding/general',
      component: CodingGeneralComponent
    },
    {
      path: 'coding/dataStructures',
      component: DataStructuresComponent
    },
    {
      path: 'coding/cpp',
      component: CppNotesComponent
    },
    {
      path: 'coding/cpp-part2',
      component: CppNotesPart2Component
    },
    {
      path: 'coding/javaScript',
      component: JavascriptNotesComponent
    },
    {
      path:'coding/resources',
      component: CodingResourcesComponent
    },
    {
      path:'robotics/ROS',
      component: RosNotesComponent
    },
    {
      path: 'webDevelopment/general',
      component: WebDevelopmentGeneralComponent
    },
    {
      path: 'webDevelopment/sequelize',
      component: SequelizeNotesComponent
    },
    {
      path: 'webDevelopment/postgresql',
      component: PostgresqlNotesComponent
    },
    {
      path: 'miscellaneuos/npm',
      component: NpmNotesComponent
    },
    {
      path: 'miscellaneuos/GitNotes',
      component: GitNotesComponent
    },
    {
      path: 'miscellaneuos/GitLabCICD',
      component: GitlabCiCdNotesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalNotesRoutingModule { }
