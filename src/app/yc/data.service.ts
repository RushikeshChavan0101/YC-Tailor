import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, PData, hData, lData } from './data';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class DataService {

private order: boolean = false;
isOrder():boolean{
  return this.order;
}

createOrder(){
  this.order=true;
}

  constructor(private http:HttpClient) {}

  getData() {
    return this.http.get<Data[]>("http://localhost:3000/ycdata");
  }

  createData(data: Data){
    return this.http.post<Data[]>("http://localhost:3000/ycdata", data);
  }
  

  pGetData(){
    return this.http.get<PData[]>("http://localhost:3000/ycdata");
  }

  pCreateData(pdata: PData){
    return this.http.post<PData[]>("http://localhost:3000/ycdata", pdata);
  }

  hgetData(){
    return this.http.get<hData[]>("http://localhost:3000/ycdata");
  }

  hCreateData(hdata: hData){
    return this.http.post<hData[]>("http://localhost:3000/ycdata", hdata);
  }


  /*login*/
  lGetData(){
    return this.http.get<lData[]>("http://localhost:3001/logindata");
  }

  lCreateData(ldata: lData){
    return this.http.post<lData[]>("http://localhost:3001/logindata", ldata);
  }


  
}
