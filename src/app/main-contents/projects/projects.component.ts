import { Component, AfterContentInit, Renderer2, ChangeDetectorRef } from '@angular/core';

export interface ISlideIndexHash {
  [projectName: string] : number
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements AfterContentInit {
  public slideIndexHash: ISlideIndexHash = {};
  public projectImagesCount = {
    'path-finding-visualizer': Array(5),
    'path-planning-visualizer': Array(6),
    'image-based-sudoku-solver': Array(1),
  }

  constructor(
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngAfterContentInit(): void {
    this.slideIndexHash['path-finding-visualizer'] = 0;
    this.slideIndexHash['path-planning-visualizer'] = 0;
    this.slideIndexHash['image-based-sudoku-solver'] = 0;

    // Trigger change detection manually to ensure the template is updated before showSlide()
    this.changeDetectorRef.detectChanges();

    this.showSlide('path-finding-visualizer', this.slideIndexHash['path-finding-visualizer']);
    this.showSlide('path-planning-visualizer', this.slideIndexHash['path-planning-visualizer']);
    this.showSlide('image-based-sudoku-solver', this.slideIndexHash['image-based-sudoku-solver']);
  }

  updateSlideIndex(project: string, x: number) {
    if (this.slideIndexHash[project] !== undefined) {
      this.slideIndexHash[project] += x;
      this.showSlide(project, this.slideIndexHash[project]);
    }
  }

  showSlide(project: string, slideIndex: number): void {
    let slides = document.getElementsByClassName("slide--" + project) as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot--" + project) as HTMLCollectionOf<HTMLElement>;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    else if (slideIndex < 0) {
      slideIndex = slides.length - 1
    }
    for (let i = 0; i < slides.length; i++) {
      this.renderer.setStyle(slides[i], 'display', 'none');
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    dots[slideIndex].classList.add('active')
    this.renderer.setStyle(slides[slideIndex], 'display', 'block');
    this.slideIndexHash[project] = slideIndex
  }

}
