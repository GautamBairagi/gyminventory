import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipTypeComponent } from './membership-type.component';

describe('MembershipTypeComponent', () => {
  let component: MembershipTypeComponent;
  let fixture: ComponentFixture<MembershipTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MembershipTypeComponent]
    });
    fixture = TestBed.createComponent(MembershipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
