import { Component } from '@angular/core';
import { skills } from '../../shared/moduls';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: skills[] = [
    {
      name: 'HTML',
      img: 'html',
    },
    {
      name: 'CSS',
      img: 'css',
    },
    {
      name: 'JavaScript',
      img: 'Javascript',
    },
    {
      name: 'TypeScript',
      img: 'ts',
    },
    {
      name: 'Angular',
      img: 'Angular',
    },
    {
      name: 'Rest-API',
      img: 'Api',
    },
    {
      name: 'Firebase',
      img: 'Firebase',
    },
    {
      name: 'Git',
      img: 'git',
    },
    {
      name: 'Scrum',
      img: 'scrum',
    },
    {
      name: 'Material Design',
      img: 'material',
    },
  ];
}


