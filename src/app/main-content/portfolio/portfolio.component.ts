import { NgClass } from '@angular/common';
import { Projects } from '../../shared/moduls';
import { Component } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: Projects[] = [
    {
      name: 'Join',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
      liveTest: '',
      github: '',
      imgSrc: 'assets/img/join.png',
    },

    {
      name: 'El pollo loco',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to collect coins and salsa bottles to fight the killer chicken.',
      liveTest: '',
      github: '',
      imgSrc: 'assets/img/Pollo loco 1.png',
    },
  ];
}
