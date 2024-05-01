import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-stock-manage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-stock-manage.component.html',
  styleUrls: ['./add-stock-manage.component.scss']
})
export class AddStockManageComponent {

  stockManagment  !: FormGroup;
  ckDep: boolean = false;

  constructor(
    private fb:FormBuilder
      ){
        this.stockManagment = this.fb.group({
          NoteTitle: ['' ,Validators.required],
          NoteContent: ['' ,Validators.required],
          
          
        })
    }

}
