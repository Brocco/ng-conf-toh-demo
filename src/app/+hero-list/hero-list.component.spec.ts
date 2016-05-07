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
import { HeroListComponent } from './hero-list.component';
import { HeroService } from '../shared';
import { Router } from '@angular/router';

describe('Component: HeroList', () => {
  let builder: TestComponentBuilder;
  
  class MockRouter{
    navigate(){}
  }

  beforeEachProviders(() => [HeroListComponent, HeroService, provide(Router, {useClass: MockRouter})]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HeroListComponent],
      (component: HeroListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HeroListComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HeroListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <toh-hero-list></toh-hero-list>
  `,
  directives: [HeroListComponent]
})
class HeroListComponentTestController {
}

