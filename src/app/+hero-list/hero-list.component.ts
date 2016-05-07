import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero, HeroService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'toh-hero-list',
  template: `
    <div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.commits}}</span> {{hero.name}}
        </li>
      </ul>
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name | uppercase}} is my hero</h2>
        <button (click)="gotoDetail()">View Details</button>
      </div>
    </div>
  `,
  styles: [
    `.selected {
      background-color: #CFD8DC !important;
      color: white;
    }`,
    `.heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 90%;
      display: flex;
      flex-wrap: wrap;
    }`,
    `.heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 1.3em .3em 0;
      height: 1.6em;
      border-radius: 4px;
      width: 150px;
    }`,
    `.heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }`,
    `.heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }`,
    `.heroes .text {
      position: relative;
      top: -3px;
    }`,
    `.heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #0886C3;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }`,
    `button {
      font-family: Arial;
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1.1em;
    }`,
    `button:hover {
      background-color: #cfd8dc;
    }`
  ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(
      private _router: Router,
      private _heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this._router.navigate(['hero-detail', { id: this.selectedHero.id }]);
  }
}