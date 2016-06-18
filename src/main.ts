import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { A2ForceAwakensAppComponent, environment} from './app/';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(A2ForceAwakensAppComponent, [HTTP_PROVIDERS]);
