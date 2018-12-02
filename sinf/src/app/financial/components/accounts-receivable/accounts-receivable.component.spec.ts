import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsReceivableComponent } from './accounts-receivable.component';

describe('AccountsReceivableComponent', () => {
  let component: AccountsReceivableComponent;
  let fixture: ComponentFixture<AccountsReceivableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsReceivableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsReceivableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
