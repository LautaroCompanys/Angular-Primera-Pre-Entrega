import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DashboardModule } from './layouts/dashboard/dashboard.module';


@NgModule({
  declarations: [AppComponent,ReactiveFormsComponent,],
  imports: [BrowserModule,AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule,DashboardModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
