import { Component, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-content-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  public faBars = faBars
  @Output() toggleEvent = new EventEmitter<null>();

  toggleMenu() {
    this.toggleEvent.emit();
  }

}
