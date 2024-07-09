import { Component } from '@angular/core';
import { ProfileTopSectionComponent } from './profile-top-section/profile-top-section.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ProfileTopSectionComponent, AboutMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
