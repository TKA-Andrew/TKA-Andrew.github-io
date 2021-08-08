import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentsRoutingModule } from './main-contents-routing.module';
import { MainContentsComponent } from './main-contents.component';


@NgModule({
  declarations: [
    MainContentsComponent
  ],
  imports: [
    CommonModule,
    MainContentsRoutingModule
  ]
})
export class MainContentsModule { }
