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
  readonly messageDefault = 'Hola, he visto tu web y quiero hablar contigo.';
  readonly whatsappBase = 'https://api.whatsapp.com/send?phone=541169221781';
  readonly emailBase = 'mailto:guillermo.gigeroa@hotmail.com?subject=Contacto por web&';
  readonly keyMessage = '&text=';

  showMenu = false;
  message?: string;

  constructor(
    private navigationService: NavigationService,
  ) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  sendMessage(type: string) {
    switch (type)
    {
      case 'whatsapp':
        {
          this.sendWhatsapp();
          break;
        }
      case 'email':
        {
          this.sendEmail();
          break;
        }
      default:
        break;
    }
  }

  private sendWhatsapp() {
    const link = this.whatsappBase + this.keyMessage + (this.message !== undefined ? this.message : this.messageDefault);
    this.navigationService.openExternal(link);
  }

  private sendEmail() {
    const link = this.emailBase + this.keyMessage + (this.message !== undefined ? this.message : this.messageDefault);
    this.navigationService.openExternal(link);
  }

}
