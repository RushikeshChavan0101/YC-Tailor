import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lData } from '../data';
import { DataService } from '../data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fname: any;
  Email: any;
  phone: any;
  password: any;
  constructor(private ds: DataService, private router: Router) { }
  signup: FormGroup | any;
  allData: lData[] = [];
  sDataFormHub: lData = {
    fname: '',
    lname: '',
    Email: '',
    phone: '',
    password: ''
  }

  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname': new FormControl('', Validators.required),
      'lname': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }


  get() {
    this.ds.lGetData().subscribe((res) => {
      this.allData = res;
      console.log(this.allData)

    })
  }

  postData() {
    this.ds.lCreateData(this.sDataFormHub).subscribe((res) => {
      console.log(this.sDataFormHub);
      alert('Data added successfull');
      this.router.navigateByUrl('yc/login');
    })
  }


  registerUser(){
    }

}

