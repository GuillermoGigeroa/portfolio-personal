import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DataService } from './shared/data-service.service';
import { NavigationService } from './shared/services/navigation.service';
import { UtilsService } from './shared/services/utils.service';

@NgModule({
  declarations: [
    AppComponent
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
