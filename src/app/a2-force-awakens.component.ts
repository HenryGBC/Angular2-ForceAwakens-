import { Component } from '@angular/core';
import {HeroesComponent } from './heroes/';

@Component({
  moduleId: module.id,
  selector: 'a2-force-awakens-app',
  templateUrl: 'a2-force-awakens.component.html',
  styleUrls: ['a2-force-awakens.component.css'],
  directives: [HeroesComponent]
})
export class A2ForceAwakensAppComponent {
  title = 'a2-force-awakens works!';
}
