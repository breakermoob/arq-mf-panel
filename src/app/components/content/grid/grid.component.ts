import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public data;

  constructor() { }

  ngOnInit() {
    this.data = JSON.parse(window.localStorage.getItem('returnData'));
    const iframe = document.getElementById('ifr')
    window.addEventListener("message", (event) => {

      const { action, key, value } = event.data;
      if (action == 'returnData') {
        window.localStorage.setItem(key, value);
        this.data = JSON.parse(window.localStorage.getItem('returnData'));
      }

    }, false);
  }

  deleteStorage() {
    window.localStorage.removeItem('returnData');
    this.data = null;
  }

}
