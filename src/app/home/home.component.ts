import { Component, OnInit } from '@angular/core';
declare const videojs;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  player;
  idx = 1;
  url="https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8"
  constructor() { }

  ngOnInit() {
  }
}
