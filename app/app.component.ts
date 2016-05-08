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
    this.active = true;

    setInterval(() =>
    {
      if(this.active) {
        this.selected = this.getNext();
      }
    }, 5000);
  }

  getNext() {
    let id = this.selected.id + 1;
    return this.get(id);
  }

  hover(id) {
    this.active = false;
    this.selected = this.get(id);
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
