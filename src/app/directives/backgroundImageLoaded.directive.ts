import { Directive, Output, EventEmitter, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundImageLoaded]'
})
export class BackgroundImageLoadedDirective implements OnInit {
  @Output() imageLoaded: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const img = new Image();
    const bgStyle = getComputedStyle(this.el.nativeElement).backgroundImage
    const src = bgStyle.replace(/(^url\()|(\)$|[\"\'])/g, '');
    img.src = src;
    img.addEventListener('load', ()=> {
      this.imageLoaded.emit(true);
    });
  }
}