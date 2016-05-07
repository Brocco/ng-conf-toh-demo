import { Component, OnInit } from '@angular/core';
import { OnActivate, RouteSegment, Tree } from '@angular/router';

import { Hero, HeroService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'toh-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>
        <span class="hero-id">{{hero.id}}</span>
      </div>
      <div>
        <label>commits: </label>
        <input [(ngModel)]="hero.commits" placeholder="commits" />
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name" />
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `,
  styles: [
    `label, .hero-id, input {
      font-size: 1.3em;
    }`,
    `input {
      padding: 5px;
    }`,
    `button {
      font-family: Arial;
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      cursor: hand;
    }`,
    `button:hover {
      background-color: #cfd8dc;
    }`
  ]
})
export class HeroDetailComponent implements OnInit, OnActivate {
  hero: Hero;

  constructor(private _heroService: HeroService) {}

  ngOnInit() {
  }

  routerOnActivate(segment: RouteSegment) {
    let id = +segment.getParam('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }

}