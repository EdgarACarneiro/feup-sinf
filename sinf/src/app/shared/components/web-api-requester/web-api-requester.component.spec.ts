import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApiRequesterComponent } from './web-api-requester.component';

describe('WebApiRequesterComponent', () => {
  let component: WebApiRequesterComponent;
  let fixture: ComponentFixture<WebApiRequesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebApiRequesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApiRequesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
