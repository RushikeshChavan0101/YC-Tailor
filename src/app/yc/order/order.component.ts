import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormControlName } from '@angular/forms'
import { DataService } from '../data.service';
import { Data, PData } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  implements OnInit{

 allData: Data[] = [];

 pAllData:PData[] = [];

 
 
 DataFormHub:Data={
   Height: '',
   Chess: '',
   Shoulder: '',
   Hand: '',
   Bicep: '',
   Cup: ''
 }

 PDataFormHub:PData={
   Height: '',
   Waist: '',
   Sheet: '',
   Thigh: '',
   Ankel: ''
 }



  loginForm = new FormGroup({
    height: new FormControl('',Validators.required),
    chess: new FormControl('',Validators.required),
    shoulder: new FormControl('',Validators.required),
    hand: new FormControl('',Validators.required),
    bicep:new FormControl('', Validators.required),
    cup: new FormControl('', Validators.required)
  })

  loginUser(){
    console.warn(this.loginForm.value)
  }

  get height(){return this.loginForm.get('height')}
  get chess(){return this.loginForm.get('chess')}
  get shoulder(){return this.loginForm.get('shoulder')}
  get hand(){return this.loginForm.get('hand')}
  get bicep(){return this.loginForm.get('bicep')}
  get cup(){return this.loginForm.get('cup')}



  loginformp = new FormGroup({
      height: new FormControl('', Validators.required),
      waist: new FormControl('', Validators.required),
      sheet: new FormControl('', Validators.required),
      thigh:new FormControl('', Validators.required),
      ankel: new FormControl('', Validators.required)
  })

  get Height(){return this.loginformp.get('height')}
  get waist(){return this.loginformp.get('waist')}
  get sheet(){return this.loginformp.get('sheet')}
  get thigh(){return this.loginformp.get('thigh')}
  get ankel(){return this.loginformp.get('ankel')}



  constructor(private ds: DataService, private router: Router){
    
  }

  ngOnInit(): void {
    
   }


  get(){
    this.ds.getData().subscribe((res) => {
      this.allData=res;
      console.log(this.allData)
    })
  }

  postData(){
    this.ds.createData(this.DataFormHub).subscribe((res) => {
      
      console.log(this.DataFormHub)
    })
  }

  //Paint//

  pGet(){
    this.ds.pGetData().subscribe((res) =>{
      this.pAllData=res;
      console.log(this.pAllData)
    })
  }

  pPostData(){
    this.ds.pCreateData(this.PDataFormHub).subscribe((res)=>{
      console.log(this.PDataFormHub)
    })
  }

}

