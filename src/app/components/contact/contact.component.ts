import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/model/constants.enum';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constants = Constants;
  showMenu = false;
  message?: string;

  constructor(
    private navigationService: NavigationService,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  sendMessage(type: string) {
    switch (type)
    {
      case (this.constants.WHATSAPP_LABEL):
        {
          this.sendWhatsapp();
          break;
        }
      case (this.constants.EMAIL_LABEL):
        {
          this.sendEmail();
          break;
        }
      default:
        break;
    }
  }

  saveData() {
    localStorage.setItem(this.constants.MESSAGE_KEY, this.message ? this.message : '');
  }

  loadData() {
    const localMessage = localStorage.getItem(this.constants.MESSAGE_KEY);
    this.message = localMessage ? localMessage : undefined;
  }

  private sendWhatsapp() {
    const link = this.constants.WHATSAPP_BASE + this.constants.MESSAGE_CONNECTOR + (this.message !== undefined ? this.message : this.constants.MESSAGE_DEFAULT);
    this.navigationService.openExternal(link);
  }

  private sendEmail() {
    const link = this.constants.EMAIL_BASE + this.constants.MESSAGE_CONNECTOR + (this.message !== undefined ? this.message : this.constants.MESSAGE_DEFAULT);
    this.navigationService.openExternal(link);
  }

}
