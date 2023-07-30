import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";
import { ShareFacadeService } from 'src/app/services/shareFacade.service';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AchievementsComponent implements OnInit {

  constructor(
    private shareFacadeService: ShareFacadeService
  ) { }

  ngOnInit(): void {
    this.shareFacadeService.startSpinner();
  }

  loaded(): void {
    this.shareFacadeService.stopSpinner();
  }

}
