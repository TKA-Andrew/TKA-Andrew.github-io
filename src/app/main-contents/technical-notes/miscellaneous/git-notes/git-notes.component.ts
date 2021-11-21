import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-notes',
  templateUrl: './git-notes.component.html',
  styleUrls: ['./git-notes.component.scss']
})
export class GitNotesComponent {

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
