import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    TranslateModule,
    CommonModule,
    ImprintComponent,
    PrivacyPolicyComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  title = 'portfolio';
}
