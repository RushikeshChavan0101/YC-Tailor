import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './yc/home/home.component';
import { AboutusComponent } from './yc/aboutus/aboutus.component';
import { OrderComponent } from './yc/order/order.component';
import { PricingComponent } from './yc/pricing/pricing.component';
import { HiringComponent } from './yc/hiring/hiring.component';
import { ContactusComponent } from './yc/contactus/contactus.component';
import { YcModule } from './yc/yc.module';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './yc/login/login.component';
import { SignupComponent } from './yc/signup/signup.component';
import { Howl } from 'howler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    OrderComponent,
    PricingComponent,
    HiringComponent,
    ContactusComponent,
    LoginComponent,
    SignupComponent
 
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    YcModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    YcModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    RouterModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
