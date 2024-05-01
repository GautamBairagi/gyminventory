import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { MembershipService } from 'src/app/services/membership.service';
@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , MatFormFieldModule,MatSelectModule, FormsModule],
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss']
})
export class AddWorkoutComponent {
  registerForm !:FormGroup ;
  ckDep:boolean = false;
  show: boolean = false;
  selectedIncomedata: any;
  editData = false;
  data: any;
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private fb: FormBuilder,
    private _addworkout: MembershipService,
    private activateRoute: ActivatedRoute,
    ) {
      this.activateRoute.queryParams.subscribe(parsam => {
        this.selectedIncomedata = JSON.parse(atob(parsam['data']));
        if (this.selectedIncomedata) {
          this.data = this.selectedIncomedata;
          console.log("datahshddjsdjs",this.data)
          this.editData = true;
        } else {
          this.editData = false;
        }
      });
    }

  ngOnInit(){
    this.registerForm = this.fb.group({
      membername : ['', Validators.required],
      level : ['', Validators.required],
      startdate : ['', Validators.required],
      enddate : ['', Validators.required],
      description : [''],
      slectdays : ['', Validators.required],
      workactivity : ['',Validators.required],
     })
     this.CheckAddEdit();
  }
  
  CheckAddEdit() {
    if (this.data) {
      this.editData = true;
      console.log("Edit DATA: ", this.data);
      this.setCustomerData();
    }
    else {
      // this.setCandidateData() ;
      return;
    }
  }
  setCustomerData() {
    this.ckDep = true;
    this.registerForm.patchValue({
      membername: this.data.membername,
      level: this.data.level,
      startdate: this.data.startdate,
      enddate: this.data.enddate,
      description: this.data.description,
      slectdays: this.data.slectdays,
      workactivity: this.data.workactivity,
    })
  }

  submit() {
    if (!this.registerForm.valid) {
      //  this.toastr.warning("You have entered the invalid data");
      return;
    } else {
      if (this.editData) {
        this.updateworkout();

      } else {
        console.log("Create Workoutdata Data: ", this.registerForm.value);
        this.createNewTask();
      }
    }
  }
  createNewTask(){
      this.ckDep = true;
        console.log(this.registerForm.value)
        this._addworkout.Add_workout(this.registerForm.value).subscribe({
          next: (res) => {
            // this._tos.SuccessSnackBar("Add Purchase order successfully")
            // this._dilogs.closeAll()
            alert("Work out added sucessfully")
          },
          error: (err) => {
            console.log('err in post Purchase Order')
          }
        })
    }

    updateworkout(){
        this.ckDep = true;
          console.log(this.registerForm.value)
          this._addworkout.editworkout(this.registerForm.value).subscribe({
            next: (res) => {
              //this._tos.SuccessSnackBar("Add Purchase order successfully")
              //this._dilogs.closeAll()
              alert("Work out Update sucessfully")
            },
            error: (err) => {
              console.log('err in post Purchase Order')
            }
          })
      }
    onChange($event) {
      this.show = true;
  }
}