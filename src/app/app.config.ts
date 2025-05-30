import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { CdTimerComponent } from 'angular-cd-timer';

export const appConfig: ApplicationConfig = {
  providers: [
  provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
    withInMemoryScrolling ({
    scrollPositionRestoration: 'enabled',
    anchorScrolling:'enabled',
  }),
    withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    CdTimerComponent
  ]
};
