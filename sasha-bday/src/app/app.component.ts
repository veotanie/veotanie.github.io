import { Component, AfterViewInit, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  animation: any;

  ngAfterViewInit() {
    this.animation = anime({
      targets: '#cssSelector .el',
      translateY: -500,
      width: '250px',
      'font-size': '20px',
      color: "rgb(255,255,255)",
      duration: 2000
    });
    console.log('play');
    this.animation.play();
  }
}
