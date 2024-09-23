import { Component } from '@angular/core';
import { NavigationService } from './shared/services/navigation.service';
import { UtilsService } from './shared/services/utils.service';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dataService: DataService,
    private navigationService: NavigationService,
    private utilsService: UtilsService,
  ) {}
}
