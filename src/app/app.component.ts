import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-subdomain';
  postMsg = [
    {
      name: 'Ford Mustang Boss 429 Panel',
      keyName: 'ford-mustang-boss-429-panel',
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mustang-paul-walker-1586161645.jpg',
      description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
      origin: 'Americano'
    },
    {
      name: 'Nissan GTR R34 Panel',
      keyName: 'nissan-gtr-r34-panel',
      url: 'https://i.pinimg.com/originals/90/89/bf/9089bf12e9a6a351c64df21bbee87ede.jpg',
      description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
      origin: 'Japonés'
    },
  ];

  constructor() {

    this.postCrossDomainMessage(this.postMsg);
  }

  postCrossDomainMessage(msg) {
    const win = document.getElementById('ifr')['contentWindow'];
    win.postMessage(msg, "https://admin.microfrontends.rocks/");
  }
}
