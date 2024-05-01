import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor( private _http : HttpClient ) { }

  add_MemberShip(data:any){
   return  this._http.post<any>(environment._api+"/api/addmembership",data)
  }
  get_MemberShip(){
    return this._http.get<any>(environment._api+"/api/addmembership")
  }

  addMembers(obj){
    return this._http.post(environment._api+"/api/user/register",obj)
  }
  getMembers(){
    return this._http.get(environment._api+"/api/user")
  }


  deleteMembers(id:any){

    return this._http.delete<any>(environment._api+"/api/user/"+id)
   }
  getMemberById(id){
    return this._http.get(environment._api+"/api/user/"+id)
  };
  login(obj){
    return this._http.post(environment._api+"/api/admin/admin-login",obj)
  }
  Add_workout(obj:any){
    return this._http.post<any>(`${environment._api}/api/workout/`,obj)
    }
    Get_workout(){
      return this._http.get<any>(`${environment._api}/api/workout/`)
    }
    delete_workout(id : any) {
        return this._http.delete<any>(`${environment._api}/api/workout/${id}`)
      }
      editworkout(id:any) {
        return this._http.put<any>(`${environment._api}/api/workout/${id.id}`,id)
      }
}
