import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffserviceService {

  constructor( private _http : HttpClient) { }
  
    addStaffpost(obj){
      return this._http.post(environment._api+"/api/staff/staff-register",obj)
    }
    getStaff(){
      return this._http.get(environment._api+"/api/staff")
    }
    getStaffById(id){
      return this._http.get(environment._api+"/api/staff"+id)
    };
  
  }

