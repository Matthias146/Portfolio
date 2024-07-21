import { CommonModule, NgClass } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageDataService } from '../../translate-data.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, CommonModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageDataService
  ) {}

  lang = inject(LanguageDataService);
  isOpen = false;
  menuOpen = false;

  changeLanguage(langCode: string) {
    this.lang.changeLanguageService(langCode);
    this.isOpen = false;
  }

  toggleLanguageSelect() {
    this.isOpen = !this.isOpen;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      document.getElementById('navMenuMobile')?.classList.remove('d-none')
     }  else {
      document.getElementById('navMenuMobile')?.classList.add('d-none')
    }
  }
}
