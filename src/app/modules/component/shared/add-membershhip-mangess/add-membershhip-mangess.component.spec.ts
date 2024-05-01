import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembershhipMangessComponent } from './add-membershhip-mangess.component';

describe('AddMembershhipMangessComponent', () => {
  let component: AddMembershhipMangessComponent;
  let fixture: ComponentFixture<AddMembershhipMangessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddMembershhipMangessComponent]
    });
    fixture = TestBed.createComponent(AddMembershhipMangessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
