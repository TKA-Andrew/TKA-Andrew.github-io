import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoExpertFundamentalComponent } from './algoExpertNotes/algo-expert-fundamental/algo-expert-fundamental.component';
import { CodingGeneralComponent } from './coding/coding-general/coding-general.component';
import { CodingResourcesComponent } from './coding/coding-resources/coding-resources.component';
import { SystemExpertFundamentalComponent } from './systemExpertNotes/system-expert-fundamental/system-expert-fundamental.component';
import { TechnicalNotesComponent } from './technical-notes.component';
import { SequelizeNotesComponent } from './webDevelopment/sequelize-notes/sequelize-notes.component';

const routes: Routes = [{
  path:'',
  component:TechnicalNotesComponent,
  children: [
    {
      path: 'coding/general',
      component: CodingGeneralComponent
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
