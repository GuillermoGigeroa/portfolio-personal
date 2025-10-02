import { Component } from '@angular/core';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    standalone: false
})
export class PagesComponent {
  showMenu = false;
  constructor() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
