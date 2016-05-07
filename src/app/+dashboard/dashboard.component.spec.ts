import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../shared';
import { Router } from '@angular/router';

describe('Component: Dashboard', () => {
  let builder: TestComponentBuilder;
  
  class MockRouter{
    navigate(){}
  }

  beforeEachProviders(() => [DashboardComponent, HeroService, provide(Router, {useClass: MockRouter})]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DashboardComponent],
      (component: DashboardComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DashboardComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DashboardComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <toh-dashboard></toh-dashboard>
  `,
  directives: [DashboardComponent]
})
class DashboardComponentTestController {
}

