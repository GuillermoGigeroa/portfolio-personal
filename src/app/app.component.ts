import { Component } from '@angular/core';
import { DataService } from './shared/data-service.service';
import { NavigationService } from './shared/services/navigation.service';
import { UtilsService } from './shared/services/utils.service';

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
