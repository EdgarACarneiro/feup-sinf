import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopClientsComponent } from './top-clients.component';

describe('TopClientsComponent', () => {
  let component: TopClientsComponent;
  let fixture: ComponentFixture<TopClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
