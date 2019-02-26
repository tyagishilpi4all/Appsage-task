import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacLinkComponent } from './nac-link.component';

describe('NacLinkComponent', () => {
  let component: NacLinkComponent;
  let fixture: ComponentFixture<NacLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
