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
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDividerModule } from '@angular/material/divider';
import { AlgoExpertFundamentalComponent } from './algoExpertNotes/algo-expert-fundamental/algo-expert-fundamental.component';
import { SystemExpertFundamentalComponent } from './systemExpertNotes/system-expert-fundamental/system-expert-fundamental.component';
import { CodingResourcesComponent } from './coding/coding-resources/coding-resources.component';
import { CodingGeneralComponent } from './coding/coding-general/coding-general.component';
import { SequelizeNotesComponent } from './webDevelopment/sequelize-notes/sequelize-notes.component';
import { JavascriptNotesComponent } from './coding/javascript-notes/javascript-notes.component';
import { WebDevelopmentGeneralComponent } from './webDevelopment/web-development-general/web-development-general.component';
import { NpmNotesComponent } from './miscellaneous/npm-notes/npm-notes.component';
import { CppNotesComponent } from './coding/cpp-notes/cpp-notes.component';

@NgModule({
  declarations: [
    TechnicalNotesComponent,
    AlgoExpertFundamentalComponent,
    SystemExpertFundamentalComponent,
    CodingResourcesComponent,
    CodingGeneralComponent,
    SequelizeNotesComponent,
    JavascriptNotesComponent,
    WebDevelopmentGeneralComponent,
    NpmNotesComponent,
    CppNotesComponent],
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
    MatDividerModule,
    FontAwesomeModule
  ]
})
export class TechnicalNotesModule { }
