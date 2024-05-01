import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrintNotesComponent } from './add-print-notes.component';

describe('AddPrintNotesComponent', () => {
  let component: AddPrintNotesComponent;
  let fixture: ComponentFixture<AddPrintNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddPrintNotesComponent]
    });
    fixture = TestBed.createComponent(AddPrintNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
