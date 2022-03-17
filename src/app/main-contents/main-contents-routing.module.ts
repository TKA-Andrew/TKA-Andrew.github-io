import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { HomeComponent } from './home/home.component';
import { MainContentsComponent } from './main-contents.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: 'achievements',
        component: AchievementsComponent
      },
      {
        path: 'technicalNotes',
        loadChildren: () => import('./technical-notes/technical-notes.module').then(m => m.TechnicalNotesModule)
      }
    ]
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentsRoutingModule { }
