import { Component, QueryList, ViewChildren } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cpp-notes',
  templateUrl: './cpp-notes.component.html',
  styleUrls: ['./cpp-notes.component.scss']
})
export class CppNotesComponent {
  @ViewChildren('childTabs') childTabs: QueryList<MatTabGroup> | undefined;
  public faArrowAltCircleUp = faArrowAltCircleUp
  activeIndex: any;

  constructor(
    private router: Router
  ) { }

  scrollTo(fragment: string): void {
    this.router.navigate([], { fragment: fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element != undefined) element.scrollIntoView();
    });
  }


  onTabChange(event: any){
    this.activeIndex = event.index;
    if (this.childTabs) {
      this.childTabs.forEach(childTab => {
         childTab.realignInkBar();
      });
    }

  }

}
