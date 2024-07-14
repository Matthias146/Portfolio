import { SkillsComponent } from './skills/skills.component';
import { Component } from '@angular/core';
import { ProfileTopSectionComponent } from './profile-top-section/profile-top-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    ProfileTopSectionComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
