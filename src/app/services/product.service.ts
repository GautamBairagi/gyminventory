import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }
  addProduct(obj:any){
    return this._http.post<any>(environment._api+"/api/addproduct/",obj)
  }

  getProduct(){
    return this._http.get<any>(environment._api+"/api/addproduct/")
  }
  deleteProduct(id:any){

   return this._http.delete<any>(environment._api+"/api/addproduct/"+id)
  }
}
