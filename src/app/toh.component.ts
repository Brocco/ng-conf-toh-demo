import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HeroService } from './shared';
import { HeroDetailComponent } from './+hero-detail';
import { HeroListComponent } from './+hero-list';


@Component({
  moduleId: module.id,
  selector: 'toh-app',
  templateUrl: 'toh.component.html',
  styleUrls: ['toh.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/hero-detail', component: HeroDetailComponent},
  {path: '/hero-list', component: HeroListComponent}
])
export class TohAppComponent {
  title = 'Thank you to CLI Contribs';
}
