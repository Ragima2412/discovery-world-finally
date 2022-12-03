import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, Swiper } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-popular-posts-slider',
  templateUrl: './popular-posts-slider.component.html',
  styleUrls: ['./popular-posts-slider.component.scss']
  // encapsulation: ViewEncapsulation.None,
})
export class PopularPostsSliderComponent implements OnInit {

  public posts = [
    {}, 'post2', 'post3'
  ]

  
  slides$ = new BehaviorSubject<string[]>(['']);

  constructor() {}

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 50 }).map((el, index) => `Slide ${index + 1}`)
    );
  }


  // thumbsSwiper: any;
  // setThumbsSwiper(swiper: any) {
  //   this.thumbsSwiper = swiper;
  // }
  // controlledSwiper: any;
  // setControlledSwiper(swiper: any) {
  //   this.controlledSwiper = swiper;
  // }
  
  setSwiperInstance(swiper: Swiper) {
    setInterval(() => {
      swiper.slideNext();
    }, 3000);
  }
}