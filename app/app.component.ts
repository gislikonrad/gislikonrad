import { Component } from 'angular2/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
    bindings: [AppService]
})
export class AppComponent {
  constructor(public service: AppService) {
    this.list = service.getContactInfo();
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
    let id = this.selected.id + 1;
    return this.get(id);
  }

  mouseover(id) {
    if(!this.hover && this.play) {
      this.togglePlayback();
      this.play = true;
    }
    this.hover = true;
    this.selected = this.get(id);
  }

  mouseleave() {
    if(this.play) {
      this.togglePlayback();
      this.play = true;
    }
    this.hover = false;
  }

  get(id) {
    let selected = null;
    for(let i = 0; i < this.list.length; i++) {
      if(this.list[i].id === id) {
        selected = this.list[i];
        break;
      }
    }
    if(selected === null) {
      selected = this.list[0];
    }
    return selected;
  }
}
