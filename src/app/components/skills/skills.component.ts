import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  showMenu = false;
  constructor(
    private dataService: DataService,
    private navigationService: NavigationService,
    private utilsService: UtilsService,
  ) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
