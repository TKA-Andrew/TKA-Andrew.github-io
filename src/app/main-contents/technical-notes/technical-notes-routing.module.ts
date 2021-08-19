import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoExpertFundamentalComponent } from './algoExpertNotes/algo-expert-fundamental/algo-expert-fundamental.component';
import { GeneralComponent } from './coding/general/general.component';
import { SystemExpertFundamentalComponent } from './systemExpertNotes/system-expert-fundamental/system-expert-fundamental.component';
import { TechnicalNotesComponent } from './technical-notes.component';

const routes: Routes = [{
  path:'',
  component:TechnicalNotesComponent,
  children: [
    {
      path: 'general',
      component: GeneralComponent
    },
    {
      path: 'algoExpert/fundamental',
      component: AlgoExpertFundamentalComponent
    },
    {
      path: 'systemExpert/fundamental',
      component: SystemExpertFundamentalComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalNotesRoutingModule { }
