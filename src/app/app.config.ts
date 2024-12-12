import { ApplicationConfig } from "@angular/core";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { demoRequestInterceptor, demoResponseInterceptor } from "./_interceptors/demo.interceptors";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([demoRequestInterceptor, demoResponseInterceptor]))
  ]
}