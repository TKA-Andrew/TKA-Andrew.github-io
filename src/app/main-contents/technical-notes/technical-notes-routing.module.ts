import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoExpertFundamentalComponent } from './algoExpertNotes/algo-expert-fundamental/algo-expert-fundamental.component';
import { CodingGeneralComponent } from './coding/coding-general/coding-general.component';
import { CodingResourcesComponent } from './coding/coding-resources/coding-resources.component';
import { JavascriptNotesComponent } from './coding/javascript-notes/javascript-notes.component';
import { SystemExpertFundamentalComponent } from './systemExpertNotes/system-expert-fundamental/system-expert-fundamental.component';
import { TechnicalNotesComponent } from './technical-notes.component';
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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalNotesRoutingModule { }
