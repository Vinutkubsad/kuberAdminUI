import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectCharityComponent } from './reject-charity.component';

describe('RejectCharityComponent', () => {
  let component: RejectCharityComponent;
  let fixture: ComponentFixture<RejectCharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectCharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
