import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentsRoutingModule } from './main-contents-routing.module';
import { MainContentsComponent } from './main-contents.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import  {MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    MainContentsComponent,
    TopbarComponent,
    FooterComponent,
    AboutMeComponent,
  ],
  imports: [
    CommonModule,
    MainContentsRoutingModule,
    FlexLayoutModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule
  ]
})
export class MainContentsModule { }
