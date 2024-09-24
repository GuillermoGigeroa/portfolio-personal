import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

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
