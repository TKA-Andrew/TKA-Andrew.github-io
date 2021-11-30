import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalNotesRoutingModule } from './technical-notes-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TechnicalNotesComponent } from './technical-notes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDividerModule } from '@angular/material/divider';
import { CodingResourcesComponent } from './coding/coding-resources/coding-resources.component';
import { CodingGeneralComponent } from './coding/coding-general/coding-general.component';
import { SequelizeNotesComponent } from './webDevelopment/sequelize-notes/sequelize-notes.component';
import { JavascriptNotesComponent } from './coding/javascript-notes/javascript-notes.component';
import { WebDevelopmentGeneralComponent } from './webDevelopment/web-development-general/web-development-general.component';
import { NpmNotesComponent } from './miscellaneous/npm-notes/npm-notes.component';
import { CppNotesComponent } from './coding/cpp-notes/cpp-notes.component';
import { CppNotesPart2Component } from './coding/cpp-notes-part2/cpp-notes-part2.component';
import { PostgresqlNotesComponent } from './webDevelopment/postgresql-notes/postgresql-notes.component';
import { DataStructuresComponent } from './coding/data-structures/data-structures.component';
import { GitlabCiCdNotesComponent } from './miscellaneous/gitlab-ci-cd-notes/gitlab-ci-cd-notes.component';
import { GitNotesComponent } from './miscellaneous/git-notes/git-notes.component';
import { RosNotesComponent } from './robotics/ros-notes/ros-notes.component';
import { CmakeNotesComponent } from './miscellaneous/cmake-notes/cmake-notes.component';

@NgModule({
  declarations: [
    TechnicalNotesComponent,
    CodingResourcesComponent,
    CodingGeneralComponent,
    SequelizeNotesComponent,
    JavascriptNotesComponent,
    WebDevelopmentGeneralComponent,
    NpmNotesComponent,
    CppNotesComponent,
    CppNotesPart2Component,
    PostgresqlNotesComponent,
    DataStructuresComponent,
    GitlabCiCdNotesComponent,
    GitNotesComponent,
    RosNotesComponent,
    CmakeNotesComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TechnicalNotesRoutingModule,
    MatExpansionModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatDividerModule,
    FontAwesomeModule
  ]
})
export class TechnicalNotesModule { }
