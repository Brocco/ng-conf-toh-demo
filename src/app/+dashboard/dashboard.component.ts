import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero, HeroService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'toh-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private _heroService: HeroService,
    private _router: Router) {}

  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0,5));
  }
  
  gotoDetail(hero: Hero) {
    let link = ['hero-detail', { id: hero.id }];
    this._router.navigate(link);
  }

}
