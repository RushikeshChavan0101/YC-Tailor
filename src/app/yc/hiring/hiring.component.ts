import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hData } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit{

  allData: hData[] = [];

  hDataFormHub: hData = {
    Name    : '',
    Mobile  : '',
    Address : ''
  }


  hiringForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)

  })

  get fullname() { return this.hiringForm.get('fullname') }
  get mobile() { return this.hiringForm.get('mobile') }
  get address() { return this.hiringForm.get('address') }

  constructor(private ds: DataService) { }
  ngOnInit(): void {}


  get(){
    this.ds.hgetData().subscribe((res) => {
      this.allData=res;
      console.log(this.allData)
    })
  }

  postData(){
    this.ds.hCreateData(this.hDataFormHub).subscribe((res)=>{
      console.log(this.hDataFormHub)
    })
  }
}


