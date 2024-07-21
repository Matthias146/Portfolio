import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateModuleConfig,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const translateModuleConfig: TranslateModuleConfig = {
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
};

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes),
      provideClientHydration(),
      provideHttpClient(withFetch()),
      importProvidersFrom(
        BrowserModule,
        TranslateModule.forRoot(translateModuleConfig)
      ), provideAnimationsAsync(),
    ],
  };
  export default appConfig;

