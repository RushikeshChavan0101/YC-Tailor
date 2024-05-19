import { Component, OnInit } from '@angular/core';
import { DataService } from './yc/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'YC';

  

  constructor(private ds:DataService, private router:Router) {}

  ngOnInit(): void {
    /*if(this.ds.isOrder()){
  this.router.navigate(['yc/order']);
}else{
  alert('want to create account')
}*/
  }

}
