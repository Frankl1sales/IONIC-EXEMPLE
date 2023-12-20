import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nome: string = 'Franklin'; //variavel publica
  constructor() {}
  ngOnInit() {
    this.chamarNome()
    this.nome = 'Frank'
  }
  chamarNome():void{
    alert('ESSA FUNÇÃO FOI CHAMADA')
  }
}
