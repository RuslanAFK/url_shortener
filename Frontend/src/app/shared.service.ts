import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'https://localhost:44311/';

  constructor(private http:HttpClient) { }

  getUrlList() : Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'urls');
  }
  getUrl(val : any) : any{
    return this.http.get(this.APIUrl+'urls/Details/'+val)
  }
  addUrl(val : any){
    return this.http.post(this.APIUrl+'urls/Create', val);
  }
  deleteUrl(val : any){
    return this.http.delete(this.APIUrl+'urls/delete/'+val)
  }

  login(val: any){
    return this.http.post(this.APIUrl+'Account/Login', val);
  }
  register(val: any){
    return this.http.post(this.APIUrl+'Account/Register', val);
  }
  logoff(){
    return this.http.post(this.APIUrl+'Account/Logoff', null);
  }

}
