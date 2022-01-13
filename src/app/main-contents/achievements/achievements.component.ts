import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AchievementsComponent implements OnInit {

  // mgl-timeline settings
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';

  constructor() { }

  ngOnInit(): void {
  }


  onDotClick(event: { stopPropagation: () => void; }) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

}
