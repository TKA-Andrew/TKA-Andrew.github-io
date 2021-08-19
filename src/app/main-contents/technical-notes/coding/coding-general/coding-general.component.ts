import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coding-general',
  templateUrl: './coding-general.component.html',
  styleUrls: ['./coding-general.component.scss']
})
export class CodingGeneralComponent {

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