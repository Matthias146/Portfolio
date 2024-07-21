import { Component } from '@angular/core';
import { MainContentComponent } from '../../main-content/main-content.component';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MainContentComponent, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
