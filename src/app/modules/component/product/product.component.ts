import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AddMembershipTypeComponent } from '../shared/add-membership-type/add-membership-type.component';
import { AddProductComponent } from '../shared/add-product/add-product.component';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [DecimalPipe,NgFor, CommonModule,FormsModule, NgbTypeaheadModule, NgbPaginationModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers : [DecimalPipe]
})
export class ProductComponent {
	page = 1;
	pageSize = 5;
	allProduct:any = []
	collectionSize = this.allProduct.length;
	productMap :any =[];
	id : any
	

	constructor(
		private modalService: NgbModal,
		private _product : ProductService,

	) {
		this.refreshCountries();
	}
	ngOnInit(){
		this.pageLoad()
	}
    pageLoad(){
		this._product.getProduct().subscribe({
			next: (res)=>{
				this.allProduct = res;
				 console.log(this.allProduct)
				},
			error: (err)=>{
				console.log("error in get product", err)
			}
		})
	}
	refreshCountries() {
		this.productMap = this.allProduct.map((country, i) => ({ id: i + 1, ...country })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
openModal() {
		this.modalService.open(AddProductComponent,{ size: 'xl' });
	}

	deleteProduct(id:any){
		this._product.deleteProduct(id).subscribe({
			next:(res)=>{
			console.log(res);
		}
	})
		this.pageLoad()
	}
	
	editOpenModal(data:any){
		var editobject = {
			data: data,
		  }
		  this.modalService.open(AddProductComponent,{
			


		  })
	}


}
