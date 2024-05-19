import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { lData } from '../data';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup | any;
  password!: string;
  fname!: string;

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl('', Validators.required),
      'password': new FormControl('',Validators.required)
    })
  }

loginUser(){
  const loginData = {
    fname: this.fname,
    password: this.password
  };

  this.http.get<any[]>('http://localhost:3001/logindata', {params:loginData}).subscribe(lData=>{
    if(lData.length > 0 ){
      this.router.navigateByUrl('yc/home');
    }else{
      alert('Invalid Login')
    }
  });
}

}
