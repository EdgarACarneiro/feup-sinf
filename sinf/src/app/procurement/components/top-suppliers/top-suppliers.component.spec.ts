import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSuppliersComponent } from './top-suppliers.component';

describe('TopSuppliersComponent', () => {
  let component: TopSuppliersComponent;
  let fixture: ComponentFixture<TopSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
