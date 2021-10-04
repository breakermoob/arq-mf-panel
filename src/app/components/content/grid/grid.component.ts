import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public data;

  @ViewChild('chete') chete: ElementRef;

  constructor() { }

  ngOnInit() {
    this.data = JSON.parse(window.localStorage.getItem('returnData'));
    const iframe = document.getElementById('ifr')
    window.addEventListener("message", this.messageHandler, false);
  }

  messageHandler(event) {
    const { action, key, value } = event.data;
    if (action == 'returnData') {
      window.localStorage.setItem(key, value);
      this.chete.nativeElement.click();
    }
  }

  setValues() {
    this.data = JSON.parse(window.localStorage.getItem('returnData'));
  }

}
