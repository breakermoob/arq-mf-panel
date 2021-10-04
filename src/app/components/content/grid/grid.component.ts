import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public data;

  constructor() {
    this.data = JSON.parse(window.localStorage.getItem('galleryData')) || [];
  }

  ngOnInit() {
  }

}
