import { Component, OnInit } from '@angular/core';

import { Browser } from '@capacitor/browser';

import licenses from 'src/assets/data/licenses.json'

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.page.html',
  styleUrls: ['./licenses.page.scss'],
})
export class LicensesPage implements OnInit {

  protected licensesObject: any;

  constructor() { }

  ngOnInit() {
    this.licensesObject = licenses;
  }

  protected linkButtonClick(event: Event, url: string) {
    event.stopImmediatePropagation();

    this.openProjectUrl(url);
  }

  private openProjectUrl = async (url: string) => {
    await Browser.open({ url: url });
  };

}
