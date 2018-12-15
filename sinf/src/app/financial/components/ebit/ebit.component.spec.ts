import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbitComponent } from './ebit.component';

describe('EbitComponent', () => {
  let component: EbitComponent;
  let fixture: ComponentFixture<EbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
