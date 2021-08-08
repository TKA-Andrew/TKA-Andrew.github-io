import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentsComponent } from './main-contents.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentsRoutingModule { }
