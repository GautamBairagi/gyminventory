import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MatSelectModule } from '@angular/material/select';

import { HttpErrorResponse } from '@angular/common/http';
import { MembershipService } from 'src/app/services/membership.service';


@Component({
  selector: 'app-workout-log',
  standalone: true,
  imports: [DecimalPipe,NgFor, CommonModule,FormsModule, NgbTypeaheadModule, NgbPaginationModule,ReactiveFormsModule,MatSelectModule,MatProgressSpinnerModule,NgxSpinnerModule],
  templateUrl: './workout-log.component.html',
  styleUrls: ['./workout-log.component.scss'],
  providers :[DecimalPipe]
})
export class WorkoutLogComponent {
  page = 1;
	pageSize = 5;
	collectionSize : any ;
	countries:any;
    Allworkout:any = []
	activateRoute: any;
	duplicateData: any;
	constructor(
		private _routes : Router,
		private spinner: NgxSpinnerService,
		private _addworkout: MembershipService,
	) {
		this.refreshCountries();
	}
	ngOnInit(){
		this.GetAllWorkout()
	}
	GetAllWorkout(){
		this.spinner.show();
		this._addworkout.Get_workout().subscribe({
		  next: (res) =>{
			this.Allworkout = res ;
		   console.log("Data get sucessfully",this.Allworkout)
		  },
		  error: (err) =>{
			
			console.log('err in get Ladger Account', err)
		  },
		})
		this.spinner.hide();
	   }
	   
	   deleteworkout(id: any) {
		this._addworkout.delete_workout(id).subscribe((data: any) => {
		  if (data) {
			console.log('Data Deleted:-', data);
		  }
		  else {
			console.log("Something went wrong");
		  }
		}, (error: HttpErrorResponse) => {
		  console.log("Something went wrong", error);
		})
	  }
	refreshCountries() {
		this.countries = this.Allworkout.map((country, i) => ({ id: i + 1, ...country })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
openModal() {
	this._routes.navigate(['/admin/workoutlog/add'])
	}
editModal(data) {	
		this._routes.navigate(["/admin/workoutlog/add"],
		{
		  queryParams: { data: btoa(unescape(encodeURIComponent(JSON.stringify(data)))) }
		});
	}

	
}