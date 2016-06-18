import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HeroComponent } from './hero.component';

@Component({
  moduleId: module.id,
  selector: 'toh-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor() {}

  ngOnInit() {
    this.heroes = [
      { 'id': 11, 'name': 'Chewbacca'},
      { 'id': 12, 'name': 'Rey'},
      { 'id': 13, 'name': 'Finn'},
      { 'id': 14, 'name': 'Han Solo'},
      { 'id': 15, 'name': 'Laia'}
    ];
  }
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

}
