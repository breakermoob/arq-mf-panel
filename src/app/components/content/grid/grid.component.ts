import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public data;

  constructor() { }

  ngOnInit() {
    const iframe = document.getElementById('ifr')
    window.addEventListener("message", messageHandler, false);
    function messageHandler(event) {
      const { action, key, value } = event.data;
      if (action == 'returnData') {
        window.localStorage.setItem(key, value);
        this.data = eval(value);
        console.log(value);
        console.log(this.data);
      }
    }
  }

}
