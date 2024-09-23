import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavigationService } from './shared/services/navigation.service';
import { UtilsService } from './shared/services/utils.service';
import { SkillsComponent } from './components/skills/skills.component';
import { DataService } from './shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    DataService,
    NavigationService,
    UtilsService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
