import { CommonModule, NgClass } from '@angular/common';
import { Projects } from '../../shared/moduls';
import { Component, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: Projects[] = [
    {
      name: 'Join',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description:
        // 'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.'
        "portfolio.join",
      liveTest: 'https://join.matthias-hammelehle.de/login.html',
      github: 'https://github.com/Matthias146/join',
      imgSrc: 'assets/img/join.png',
    },

    {
      name: 'El pollo loco',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description:
      // 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to collect coins and salsa bottles to fight the killer chicken.',
      "portfolio.polloLoco",
      liveTest: 'https://el-pollo-loco.matthias-hammelehle.de/index.html',
      github: 'https://github.com/Matthias146/El-Pollo-Loco',
      imgSrc: 'assets/img/Pollo loco 1.png',
    },
  ];
}
