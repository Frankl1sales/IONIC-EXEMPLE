import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  componentes: Componente[] = [
    {
    icon: "alert-circle-outline",
    name: "Alerta",
    subtitle: "Página de alerta",
    link: "/alert"
    },
    {
      icon: "list-outline",
      name: "Action sheet",
      subtitle: "Página do action sheet",
      link: "/action-sheet"
    },
    {
      icon: "albums-outline",
      name: "Cards",
      subtitle: "Página dos cards",
      link: "/cards"
    },
    {
      icon: "calendar-outline",
      name: "Datas",
      subtitle: "Página de datas",
      link: "/datas"
    },
    {
      icon: "grid-outline",
      name: "Tabelas",
      subtitle: "Página de tabelas",
      link: "/grids"
    },
    {
      icon: "hardware-chip-outline",
      name: "Inputs",
      subtitle: "Página de inputs",
      link: "/inputs"
    }
  ]
  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menu.toggle()
  }

}

interface Componente {
  icon: string;
  name: string;
  subtitle: string;
  link: string;
}
