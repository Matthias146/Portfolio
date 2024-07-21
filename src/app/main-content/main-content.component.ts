import { SkillsComponent } from './skills/skills.component';
import { Component } from '@angular/core';
import { ProfileTopSectionComponent } from './profile-top-section/profile-top-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { ImprintComponent } from '../imprint/imprint.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    ProfileTopSectionComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ImprintComponent
],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
