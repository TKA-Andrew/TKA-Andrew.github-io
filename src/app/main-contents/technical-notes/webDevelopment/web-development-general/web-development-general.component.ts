import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-development-general',
  templateUrl: './web-development-general.component.html',
  styleUrls: ['./web-development-general.component.scss']
})
export class WebDevelopmentGeneralComponent {

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
