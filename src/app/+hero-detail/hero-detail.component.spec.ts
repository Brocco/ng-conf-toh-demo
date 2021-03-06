import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../shared';

describe('Component: HeroDetail', () => {
  let builder: TestComponentBuilder;
  
  beforeEachProviders(() => [HeroDetailComponent, HeroService]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HeroDetailComponent],
      (component: HeroDetailComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HeroDetailComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HeroDetailComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <toh-hero-detail></toh-hero-detail>
  `,
  directives: [HeroDetailComponent]
})
class HeroDetailComponentTestController {
}

