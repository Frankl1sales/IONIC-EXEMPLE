import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.page.html',
  styleUrls: ['./datas.page.scss'],
})
export class DatasPage implements OnInit {

  dt: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

  trocarData(novaData: string) {
    console.log('ionChange', novaData);
  }

}
