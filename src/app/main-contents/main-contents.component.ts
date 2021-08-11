import { Component,ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-contents',
  templateUrl: './main-contents.component.html',
  styleUrls: ['./main-contents.component.scss']
})
export class MainContentsComponent {
  @ViewChild('sidenav') public sidenav: MatDrawer | undefined
  public showMenu = false
  public faBars = faBars

  toggleSideNav() {
    this.sidenav?.toggle();
    console.log('event triggered')
  }

  toggleMenu() {
    this.showMenu = !this.showMenu
  }
}
