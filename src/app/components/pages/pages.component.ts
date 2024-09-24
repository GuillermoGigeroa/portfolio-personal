import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  showMenu = false;
  constructor(
    private dataService: DataService,
  ) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
