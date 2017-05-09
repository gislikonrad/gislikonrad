import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: any[];
  selected: any;
  index: number;
  play: boolean;
  private hover: boolean;
  private timer: number;
  private intervalId: any;
  private interval: number;
  private totalTime: number;

  constructor(public service: AppService) {
    this.list = service.getContactInfo();
    this.index = 0;
    this.selected = this.list[0];
    this.play = false;
    this.timer = 0;
    this.intervalId = 0;
    this.interval = 100;
    this.totalTime = 5000;

    this.togglePlayback();
  }

  togglePlaybackHandler($event) {
    $event.preventDefault();
    this.togglePlayback();
  }
  togglePlayback() {
    if(this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
    else {
      this.intervalId = setInterval(() =>
      {
        this.timer += this.interval;
        if(this.timer > this.totalTime) {
          this.selected = this.getNext();
          this.timer = 0;
        }
      }, this.interval);
    }

    this.play = !this.play;
  }

  getTimerPercentage() {
    return Math.round((this.timer / this.totalTime) * 100);
  }

  getNext() {
    let id = this.index + 1;
    return this.get(id);
  }

  mouseover(index) {
    if(!this.hover && this.play) {
      this.togglePlayback();
      this.play = true;
    }
    this.hover = true;
    this.selected = this.get(index);
  }

  mouseleave() {
    if(this.play) {
      this.togglePlayback();
      this.play = true;
    }
    this.hover = false;
  }

  get(index) {
    if(this.list[index]) {
      this.index = index;
      return this.list[index];
    }
    this.index = 0;
    return this.list[0];
  }
}
