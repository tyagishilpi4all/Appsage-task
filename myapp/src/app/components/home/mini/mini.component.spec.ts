import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniComponent } from './mini.component';

describe('MiniComponent', () => {
  let component: MiniComponent;
  let fixture: ComponentFixture<MiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
