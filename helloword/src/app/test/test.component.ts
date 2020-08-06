import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2> 
  Welcome {{name}}  <!-- this is interpolation -->
  </h2>
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome "+name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greeting()}}</h2>
  <!-- <h2>{{a=2+2}}</h2>  this is not allowed ie assignment -->
  <h2>{{siteUrl}}</h2>
  <h2 class="text-success">Success</h2>
  <h2 [class]="successClass">Success</h2>
  <h2 [class]="failure">Errors</h2>
  <h2 [ngClass]="message"> Class Binding</h2>

  <button (click)="onClick()" > Click</button> <!-- this is event binding -->
  <div>{{a}}</div>
<br>
  <input [(ngModel)]="name1" type="text">
  <div> {{name1}}</div> <!-- this is two way binding -->

  <h1 *ngIf="display">
  {{name}}
  </h1>
  <h1 *ngIf="!display">
  {{kk}}
  </h1>

  <div class="c1" *ngFor="let c of colors">
  <h1>{{c}}</h1>

  </div>
  `
  ,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  .c1{
    color:blue;
  }
  `]
})
export class TestComponent implements OnInit {


  colors=["red","pink","blue","green"];
  display=false;
  name="Sakshi";
  a="";
  name1="";
  kk="hi how";
  siteUrl=window.location.href;
  successClass="text-success";
  failure="text-danger";
  greeting(){
    return "Hello"+ this.name;
  }

  haserror=false;
  isSpecial:true;
  message ={
    "text-success":!this.haserror,
    "text-special":this.isSpecial,
    "text-danger":this.haserror
  }


  onClick(){
    this.a="Sakshi";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
