import { Component } from '@angular/core';
import "keen-slider/dist/keen-slider.min.css"

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  slides = [
        {color: '#007bff' ,text: 'Slider 1'}, 
        {color: '#6c757d' ,text: 'Slider 2'},
        {color: '#17a2b8' ,text: 'Slider 3'}
      ]
}
