import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-structures',
  templateUrl: './data-structures.component.html',
  styleUrls: ['./data-structures.component.scss']
})
export class DataStructuresComponent {

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
