import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Browser } from '@capacitor/browser';

import licenses from 'src/assets/data/licenses.json'

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.page.html',
  styleUrls: ['./licenses.page.scss'],
})
export class LicensesPage implements OnInit {

  protected licensesObject: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.licensesObject = licenses;
  }

  protected getSafeLicenseUrl(fileName: string) {
    const url = '/assets/licenses/' + fileName + '.txt';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  protected linkButtonClick(event: Event, url: string) {
    event.stopImmediatePropagation();

    this.openProjectUrl(url);
  }

  private openProjectUrl = async (url: string) => {
    await Browser.open({ url: url });
  };

}

/**
 * Project interface
 * 
 * This interface defines the parameters each licensed project should have.

 * @param {string} friendlyName - Project's friendly user-facing name
 * @param {string} internalName - Project's internal name of the project: no spaces or special characters
 * @param {string} licenseFriendlyName - Friendly name of the project license, user-facing
 * @param {string} licenseSPDX - The SPDX name of the license (https://spdx.org/licenses/)
 * @param {string?} url - URL to the project home page (optional)
**/
