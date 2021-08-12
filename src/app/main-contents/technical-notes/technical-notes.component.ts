import { Component, OnInit } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-technical-notes',
  templateUrl: './technical-notes.component.html',
  styleUrls: ['./technical-notes.component.scss']
})
export class TechnicalNotesComponent {
  public faList = faList;
  public isSideDrawerOpened = true;

  public toggleSideDrawer(): void {
    this.isSideDrawerOpened = !this.isSideDrawerOpened;
  }
}
