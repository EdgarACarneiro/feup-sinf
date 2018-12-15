import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbitdaComponent } from './ebitda.component';

describe('EbitdaComponent', () => {
  let component: EbitdaComponent;
  let fixture: ComponentFixture<EbitdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbitdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbitdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
