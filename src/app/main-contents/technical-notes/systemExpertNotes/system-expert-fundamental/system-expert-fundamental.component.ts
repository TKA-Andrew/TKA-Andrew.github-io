import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-expert-fundamental',
  templateUrl: './system-expert-fundamental.component.html',
  styleUrls: ['./system-expert-fundamental.component.scss']
})
export class SystemExpertFundamentalComponent {

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
