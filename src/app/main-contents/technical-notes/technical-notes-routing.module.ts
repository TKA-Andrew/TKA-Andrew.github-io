import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoExpertFundamentalComponent } from './algoExpertNotes/algo-expert-fundamental/algo-expert-fundamental.component';
import { CodingGeneralComponent } from './coding/coding-general/coding-general.component';
import { CodingResourcesComponent } from './coding/coding-resources/coding-resources.component';
import { CppNotesPart2Component } from './coding/cpp-notes-part2/cpp-notes-part2.component';
import { CppNotesComponent } from './coding/cpp-notes/cpp-notes.component';
import { JavascriptNotesComponent } from './coding/javascript-notes/javascript-notes.component';
import { NpmNotesComponent } from './miscellaneous/npm-notes/npm-notes.component';
import { SystemExpertFundamentalComponent } from './systemExpertNotes/system-expert-fundamental/system-expert-fundamental.component';
import { TechnicalNotesComponent } from './technical-notes.component';
import { PostgresqlNotesComponent } from './webDevelopment/postgresql-notes/postgresql-notes.component';
import { SequelizeNotesComponent } from './webDevelopment/sequelize-notes/sequelize-notes.component';
import { WebDevelopmentGeneralComponent } from './webDevelopment/web-development-general/web-development-general.component';

const routes: Routes = [{
  path:'',
  component:TechnicalNotesComponent,
  children: [
    {
      path: 'coding/general',
      component: CodingGeneralComponent
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
      path: 'algoExpert/fundamental',
      component: AlgoExpertFundamentalComponent
    },
    {
      path: 'systemExpert/fundamental',
      component: SystemExpertFundamentalComponent
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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalNotesRoutingModule { }
