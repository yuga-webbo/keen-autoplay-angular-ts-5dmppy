import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import KeenSlder from 'keen-slider'

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.css' ]
})
export class SliderComponent  {
  @Input() slides: {text: string, color: string}[]
  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>;

  slider: KeenSlder = null
  interval: any = null

  ngAfterViewInit(){
    this.slider = new KeenSlder(this.sliderRef.nativeElement, {touchControl: false})
    this.interval = setInterval(this.slider.next, 2000)
  }

  ngOnDestroy(){
    if(this.slider) this.slider.destroy()
    clearInterval(this.interval)
  }
}
