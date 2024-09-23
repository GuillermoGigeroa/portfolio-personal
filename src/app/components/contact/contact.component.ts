import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showMenu = false;
  constructor(
    private dataService: DataService,
    private navigationService: NavigationService,
    private utilsService: UtilsService,
  ) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  // $("#contactar").click(function(){
  //   var mensaje = $("#mensaje").val();
  //   var link = "https://api.whatsapp.com/send?phone=541169221781";
  //   if(mensaje == ""){
  //       mensaje = "Hola, he visto tu web y quiero hablar contigo."
  //       link = link + "&text=" + mensaje;
  //       window.open(link, "_blank");
  //   }
  //   else{
  //       link = link + "&text=" + mensaje;
  //       window.open(link, "_blank");
  //   }
  // })

  // $("#email").click(function(){
  //     var mensaje = $("#mensaje").val();
  //     link = "mailto:guillermo.gigeroa@hotmail.com?subject=Contacto por web&"
  //     if(mensaje == ""){
  //         mensaje = "Hola, he visto tu web y quiero hablar contigo."
  //         link = link + "&body=" + mensaje;
  //         window.open(link, "_blank");
  //     }
  //     else{
  //         link = link + "&body=" + mensaje;
  //         window.open(link, "_blank");
  //     }
  // })
}
