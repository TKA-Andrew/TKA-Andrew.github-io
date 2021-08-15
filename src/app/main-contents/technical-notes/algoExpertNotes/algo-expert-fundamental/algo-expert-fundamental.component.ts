import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-algo-expert-fundamental',
  templateUrl: './algo-expert-fundamental.component.html',
  styleUrls: ['./algo-expert-fundamental.component.scss']
})
export class AlgoExpertFundamentalComponent {

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
