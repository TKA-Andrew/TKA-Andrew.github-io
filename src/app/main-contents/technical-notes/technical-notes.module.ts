import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalNotesRoutingModule } from './technical-notes-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TechnicalNotesComponent } from './technical-notes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TechnicalNotesComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TechnicalNotesRoutingModule,
    MatExpansionModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule
  ]
})
export class TechnicalNotesModule { }