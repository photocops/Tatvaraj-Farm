import { Component } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tatvaraj-farm';


  scroll;

  constructor() {
  }


  ngOnInit() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  }

}
