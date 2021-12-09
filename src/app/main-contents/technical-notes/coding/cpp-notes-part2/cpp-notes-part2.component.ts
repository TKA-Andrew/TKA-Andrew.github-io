import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cpp-notes-part2',
  templateUrl: './cpp-notes-part2.component.html',
  styleUrls: ['./cpp-notes-part2.component.scss']
})
export class CppNotesPart2Component {

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
