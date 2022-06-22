import { Component, OnInit, Renderer2 } from '@angular/core';

export interface ISlideIndexHash {
  [projectName: string] : number
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  public slideIndex: number = 1
  public slideIndexHash: ISlideIndexHash = {};  

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.slideIndexHash['path-finding-visualizer'] = 1;
    this.slideIndexHash['path-planning-visualizer'] = 1;
    this.slideIndexHash['image-based-sudoku-solver'] = 1;
    this.showSlides('path-finding-visualizer', this.slideIndex);
    this.showSlides('path-planning-visualizer', this.slideIndex);
    this.showSlides('image-based-sudoku-solver', this.slideIndex);
  }

  plusSlides(project: string, n: number): void {
    this.showSlides(project, this.slideIndex += n);
  }
  
  // Thumbnail image controls
  currentSlide(project: string, n: number): void {
    this.showSlides(project, this.slideIndex = n);
  }

  showSlides(project: string, n: number): void {
  
    let slide_class = "";
    let dot_class = "";

    switch(project)
    {
      case 'path-finding-visualizer':
        slide_class = 'slide--path-finding-visualizer';
        dot_class = 'dot--path-finding-visualizer';
        break;
        
      case 'path-planning-visualizer':
        slide_class = 'slide--path-planning-visualizer';
        dot_class = 'dot--path-planning-visualizer';
        break;

      case 'image-based-sudoku-solver':
        slide_class = 'slide--image-based-sudoku-solver';
        dot_class = 'dot--image-based-sudoku-solver';
        break;

      default:
        break;
    }

    let slides = document.getElementsByClassName(slide_class);
    let dots = document.getElementsByClassName(dot_class);
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    // REFENCE: https://stackoverflow.com/questions/48265353/how-to-style-a-child-html-element-in-typescript-angular
    for (let i = 0; i < slides.length; i++) {
      this.renderer.setStyle(slides[i], 'display', 'none');
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    this.renderer.setStyle(slides[this.slideIndex-1], 'display', 'block');
    dots[this.slideIndex-1].className += " active";
  }

}
