import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gitlab-notes',
  templateUrl: './gitlab-notes.component.html',
  styleUrls: ['./gitlab-notes.component.scss']
})
export class GitlabNotesComponent {

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
