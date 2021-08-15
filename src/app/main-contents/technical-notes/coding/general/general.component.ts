import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {

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
