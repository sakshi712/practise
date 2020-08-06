import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from "@angular/forms";
import { CounterComponent } from './counter/counter.component';
import { CartComponent } from './cart/cart.component';
import { Counter1Component } from './counter1/counter1.component';
import { NameComponent } from './name/name.component';
import { ButtonComponent } from './button/button.component';
import { Button1Component } from './button1/button1.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CounterComponent,
    CartComponent,
    Counter1Component,
    NameComponent,
    ButtonComponent,
    Button1Component,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
