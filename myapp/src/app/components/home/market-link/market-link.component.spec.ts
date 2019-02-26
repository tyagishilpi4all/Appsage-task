import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketLinkComponent } from './market-link.component';

describe('MarketLinkComponent', () => {
  let component: MarketLinkComponent;
  let fixture: ComponentFixture<MarketLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
