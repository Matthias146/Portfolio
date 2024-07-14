import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object){
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({ once: true, duration: 1000 }); }
  }
}
