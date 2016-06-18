import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { A2ForceAwakensAppComponent, environment} from './app/';


if (environment.production) {
  enableProdMode();
}

bootstrap(A2ForceAwakensAppComponent);
