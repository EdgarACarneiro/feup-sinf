import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetSalesComponent } from './net-sales.component';

describe('NetSalesComponent', () => {
  let component: NetSalesComponent;
  let fixture: ComponentFixture<NetSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
