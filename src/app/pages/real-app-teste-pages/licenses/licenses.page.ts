import { Component, OnInit } from '@angular/core';

import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.page.html',
  styleUrls: ['./licenses.page.scss'],
})
export class LicensesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  linkButtonClick(event: Event, url: string) {
    event.stopImmediatePropagation();

    this.openProjectUrl(url);
  }

  openProjectUrl = async (url: string) => {
    await Browser.open({ url: url });
  };

}