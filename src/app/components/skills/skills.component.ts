import { Component } from '@angular/core';

export class Data {
  constructor(public name: string, public value: boolean) {}
}

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: false
})
export class SkillsComponent {
  showMenu = false;
  skills: Data[] = [
    new Data('Formación académica', false),
    new Data('Lenguajes y conocimientos técnicos', false),
    new Data('Software', false),
    new Data('Paquete Microsoft Office', false),
    new Data('Sistemas Operativos', false),
    new Data('Idiomas', false),
    new Data('Más conocimientos', false),
  ];

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  skill(name: string) {
    this.toggle(name, true);
  }

  private toggle(name: string, status?: boolean) {
    this.skills.forEach(element => {
      if (element.name === name) {
        element.value = (status !== undefined ? status : !element.value);
      }
    });
  }
}
