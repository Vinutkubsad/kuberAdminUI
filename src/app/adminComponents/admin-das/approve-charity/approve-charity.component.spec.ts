import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCharityComponent } from './approve-charity.component';

describe('ApproveCharityComponent', () => {
  let component: ApproveCharityComponent;
  let fixture: ComponentFixture<ApproveCharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveCharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
