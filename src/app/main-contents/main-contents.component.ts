import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ShareFacadeService } from '../services/shareFacade.service';

@Component({
  selector: 'app-main-contents',
  templateUrl: './main-contents.component.html',
  styleUrls: ['./main-contents.component.scss']
})
export class MainContentsComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatDrawer | undefined
  public showMenu = false
  public faBars = faBars
  public busy: Promise<boolean>;
  private globalResolve: any;

  constructor(
    private shareFacadeService: ShareFacadeService
  ) { 
    this.busy = new Promise((resolve, reject) => {
      this.globalResolve = resolve;
    });
  }

  ngOnInit(): void {
    this.shareFacadeService.spinnerBS.subscribe(
      (spin: boolean) => {
        if (spin === true) {
          this.getBusy();
        } else {
          this.globalResolve();
        }
      }
    );
  }

  toggleSideNav() {
    this.sidenav?.toggle();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu
  }

  getBusy(): void {
    this.busy = new Promise((resolve, reject) => {
      this.globalResolve = resolve;
    });
  }
}
