import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from "@angular/common/http";
import { tap } from "rxjs";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

function demoInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  console.log("[OUTGOING REQUEST]");
  console.log(request);
  const req = request.clone({
    headers: request.headers.set('DEMO-HEADER', 'DEMO HEADER') // The original request object is not mutable.
  });
  return next(req);
}

function demoResponseInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  return next(req).pipe(tap({
    next: event => {
      if (event.type === HttpEventType.Response) {
        console.log('[INCOMING RESPONSE]')
        console.log(event);
      }
    }
  }))
}

// To ensure a smooth migration,
// the migration schematic adds more providers
// to the bootstrapApplication method than necessary/desirable.
// Refactor and optimize later?
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule), // ?
    provideRouter(routes),
    provideHttpClient(withInterceptors([demoInterceptor, demoResponseInterceptor]))
  ]
}