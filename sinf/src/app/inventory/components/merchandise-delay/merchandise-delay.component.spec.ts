import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiseDelayComponent } from './merchandise-delay.component';

describe('MerchandiseDelayComponent', () => {
  let component: MerchandiseDelayComponent;
  let fixture: ComponentFixture<MerchandiseDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchandiseDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandiseDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
