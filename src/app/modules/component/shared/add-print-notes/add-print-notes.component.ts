import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-print-notes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-print-notes.component.html',
  styleUrls: ['./add-print-notes.component.scss']
})
export class AddPrintNotesComponent {

  printNotes  !: FormGroup;
  ckDep: boolean = false;

  constructor(
    private fb:FormBuilder
      ){
        this.printNotes = this.fb.group({
          PrintNoteTitle: ['' ,Validators.required],
          PrintNoteContent: ['' ,Validators.required],
          
          
        })
    }

}
