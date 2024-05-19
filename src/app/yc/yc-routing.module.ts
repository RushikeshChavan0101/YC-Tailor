import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../yc/home/home.component';
import { AboutusComponent } from '../yc/aboutus/aboutus.component';
import { OrderComponent } from '../yc/order/order.component';
import { PricingComponent } from '../yc/pricing/pricing.component';
import { HiringComponent } from '../yc/hiring/hiring.component';
import { ContactusComponent } from '../yc/contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'yc/home', component: HomeComponent },
  { path: 'yc/aboutus', component: AboutusComponent },
  { path: 'yc/order', component: OrderComponent },
  { path: 'yc/pricing', component: PricingComponent },
  { path: 'yc/hiring', component: HiringComponent },
  { path: 'yc/contactus', component: ContactusComponent },
  { path: 'yc/login', component: LoginComponent },
  { path: 'yc/signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class YcRoutingModule { }
