import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations()
  ]
});
// This simple script runs as soon as the browser loads the app
window.onload = function() {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
};

// This helps reset the position when you hit the 'Refresh' button
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};