import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypermarketComponent } from './hypermarket.component';

describe('HypermarketComponent', () => {
  let component: HypermarketComponent;
  let fixture: ComponentFixture<HypermarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypermarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
