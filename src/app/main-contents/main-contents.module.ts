import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentsRoutingModule } from './main-contents-routing.module';
import { MainContentsComponent } from './main-contents.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import  {MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MainContentsComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainContentsRoutingModule,
    FlexLayoutModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MainContentsModule { }
