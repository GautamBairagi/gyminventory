import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm! : FormGroup;
  checkForm:boolean = false;

  constructor(
    public _modal : NgbActiveModal,
    private _fb : FormBuilder,
    private _router : Router,
    private _product: ProductService
  ){}

  ngOnInit(){
    this.addProductForm = this._fb.group({
      productName :["", Validators.required],
      productPrice: ["", Validators.required],
      productQuantity : ["", Validators.required],
    })
  }
  save(){
    if(this.addProductForm.invalid){
      this.checkForm=true;
      return
      }
      console.log(this.addProductForm.value);
      this._product.addProduct(this.addProductForm.value).subscribe({
        next: (res)=>{console.log(res);
        this._modal.close();
      this._router.navigate(["/admin/product"])},
        error: (err)=>{console.log(err, "error in product add")}
      })
  }
  redirect(){
  this._router.navigate(["/product"])
  }
}
