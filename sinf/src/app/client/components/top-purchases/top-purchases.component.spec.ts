import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPurchasesComponent } from './top-purchases.component';

describe('TopPurchasesComponent', () => {
  let component: TopPurchasesComponent;
  let fixture: ComponentFixture<TopPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
