import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-npm-notes',
  templateUrl: './npm-notes.component.html',
  styleUrls: ['./npm-notes.component.scss']
})
export class NpmNotesComponent {

  constructor(
    private router: Router
  ) { }

  scrollTo(fragment: string): void {
    this.router.navigate([], { fragment: fragment }).then(res => {
      const element = document.getElementById(fragment);
      if (element != undefined) element.scrollIntoView();
    });
  }
}
