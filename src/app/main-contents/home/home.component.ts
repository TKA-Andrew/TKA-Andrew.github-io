import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ShareFacadeService } from 'src/app/services/shareFacade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(
    private shareFacadeService: ShareFacadeService
  ) {}
  
  public faGithub = faGithub;
  public faEnvelope = faEnvelope
  public faLinkedin = faLinkedin

  ngOnInit(): void {
    this.shareFacadeService.startSpinner();
  }

  loaded(): void {
    this.shareFacadeService.stopSpinner();
  }
}
