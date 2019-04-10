import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesableCharityComponent } from './desable-charity.component';

describe('DesableCharityComponent', () => {
  let component: DesableCharityComponent;
  let fixture: ComponentFixture<DesableCharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesableCharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesableCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
