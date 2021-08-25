import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cpp-notes',
  templateUrl: './cpp-notes.component.html',
  styleUrls: ['./cpp-notes.component.scss']
})
export class CppNotesComponent {
  public faArrowAltCircleUp = faArrowAltCircleUp

  constructor(
    private router: Router
  ) { }

  scrollTo(fragment: string): void {
    this.router.navigate([], { fragment: fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element != undefined) element.scrollIntoView();
    });
  }

}
