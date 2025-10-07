import { Component } from '@angular/core';

export class Data {
  constructor(public name: string, public value: boolean) {}
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false,
})
export class SkillsComponent {
  showMenu = false;
  skills: Data[] = [
    new Data('Formación académica', true),
    new Data('Lenguajes y conocimientos técnicos', true),
    new Data('Software', true),
    new Data('Paquete Microsoft Office', true),
    new Data('Sistemas Operativos', true),
    new Data('Idiomas', true),
    new Data('Más conocimientos', true),
  ];

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  skill(name: string) {
    this.toggle(name, true);
  }

  private toggle(name: string, status?: boolean) {
    this.skills.forEach((element) => {
      if (element.name === name) {
        element.value = status !== undefined ? status : !element.value;
      }
    });
  }
}
